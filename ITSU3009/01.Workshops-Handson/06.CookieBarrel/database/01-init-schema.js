// Schema initialization script for MongoDB run by mongosh during container init
// Reads cookie-barrel-schema.json and creates collections with validators and indexes

(function() {
  function printError(prefix, err) {
    try { print(prefix + ' ' + (err && err.message ? err.message : '')); } catch (_) {}
    try { printjson(err); } catch (_) {}
  }

  try {
    var dbName = (typeof process !== 'undefined' && process.env && process.env.MONGO_INITDB_DATABASE) || 'app';
    var targetDb = db.getMongo().getDB(dbName);

    var fs = (typeof require === 'function') ? require('fs') : null;
    var schemaPath = '/docker-entrypoint-initdb.d/cookie-barrel-schema.json';
    var schemaStr = null;
    if (fs && typeof fs.readFileSync === 'function') {
      try {
        schemaStr = fs.readFileSync(schemaPath, 'utf8');
      } catch (e) {
        printError('Failed to read schema file:', e);
      }
    }
    if (!schemaStr && typeof cat === 'function') {
      try { schemaStr = cat(schemaPath); } catch (_) {}
    }
    if (!schemaStr) {
      print('Could not read schema file at ' + schemaPath);
      quit(1);
    }

    var schema;
    try {
      schema = JSON.parse(schemaStr);
    } catch (e) {
      printError('Failed to parse schema JSON:', e);
      quit(1);
    }

    if (!schema || !Array.isArray(schema.collections)) {
      print('Invalid schema format: expected { collections: [...] }');
      quit(1);
    }

    function listCollectionNames(database) {
      try {
        if (typeof database.getCollectionNames === 'function') {
          var names = database.getCollectionNames();
          if (Array.isArray(names)) return names;
        }
      } catch (e) {}
      var infos = database.getCollectionInfos({}, { nameOnly: true });
      if (!Array.isArray(infos)) return [];
      return infos.map(function(ci) { return ci.name; });
    }

    var existingNames = listCollectionNames(targetDb);
    var existingSet = new Set(Array.isArray(existingNames) ? existingNames : []);

    schema.collections.forEach(function(collectionDef) {
      var name = collectionDef.name;
      var options = collectionDef.options || {};
      var validator = collectionDef.validator || undefined;
      var createOptions = Object.assign({}, options);

      if (validator) {
        createOptions.validator = validator;
        if (!createOptions.validationLevel) {
          createOptions.validationLevel = 'moderate';
        }
      }

      var exists = existingSet.has(name);

      if (!exists) {
        try {
          targetDb.createCollection(name, createOptions);
          print('Created collection ' + name);
          existingSet.add(name);
        } catch (e) {
          printError('Failed to create collection ' + name + ':', e);
        }
      } else if (validator) {
        try {
          targetDb.runCommand({ collMod: name, validator: validator, validationLevel: createOptions.validationLevel || 'moderate' });
          print('Updated validator for collection ' + name);
        } catch (e) {
          printError('Failed to update validator for ' + name + ':', e);
        }
      }

      if (Array.isArray(collectionDef.indexes)) {
        collectionDef.indexes.forEach(function(indexDef) {
          if (!indexDef || !indexDef.key) return;
          var keys = indexDef.key;
          var idxOptions = Object.assign({}, indexDef);
          delete idxOptions.key;
          try {
            targetDb.getCollection(name).createIndex(keys, idxOptions);
            if (idxOptions.name) {
              print('Ensured index ' + idxOptions.name + ' on ' + name);
            }
          } catch (e) {
            printError('Failed to create index on ' + name + ':', e);
          }
        });
      }
    });

    print('Schema initialization complete for DB: ' + dbName);
  } catch (e) {
    printError('Unexpected error during schema init:', e);
    quit(1);
  }
})();
