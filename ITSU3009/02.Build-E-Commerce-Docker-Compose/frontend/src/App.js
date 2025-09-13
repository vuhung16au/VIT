import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [health, setHealth] = useState('Checking...');
  const [apiUrl] = useState(process.env.REACT_APP_API_URL || 'http://localhost:5000');

  useEffect(() => {
    // Health check endpoint
    fetch(`${apiUrl}/health`)
      .then(response => response.json())
      .then(data => setHealth(data.status || 'OK'))
      .catch(error => setHealth('Backend not available'));
  }, [apiUrl]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛒 E-commerce Platform</h1>
        <p>Welcome to the E-commerce Platform with Docker Compose</p>
        
        <div className="status">
          <h2>System Status</h2>
          <p><strong>Frontend:</strong> ✅ Running</p>
          <p><strong>Backend:</strong> {health === 'OK' ? '✅' : '❌'} {health}</p>
          <p><strong>Environment:</strong> {process.env.REACT_APP_ENV || 'development'}</p>
          <p><strong>GitLab CI:</strong> {process.env.REACT_APP_GITLAB_CI ? '✅ Enabled' : '❌ Disabled'}</p>
        </div>

        <div className="features">
          <h2>Platform Features</h2>
          <ul>
            <li>✅ React.js Frontend</li>
            <li>✅ Node.js Backend API</li>
            <li>✅ MongoDB Database</li>
            <li>✅ Redis Caching</li>
            <li>✅ RabbitMQ Message Queue</li>
            <li>✅ Prometheus Monitoring</li>
            <li>✅ GitLab CI/CD Integration</li>
            <li>✅ Offline/Local Deployment</li>
          </ul>
        </div>

        <div className="access">
          <h2>Service Access Points</h2>
          <ul>
            <li><strong>Frontend:</strong> <a href="http://localhost:80">http://localhost:80</a></li>
            <li><strong>Backend API:</strong> <a href="http://localhost:5000">http://localhost:5000</a></li>
            <li><strong>MongoDB:</strong> localhost:27017</li>
            <li><strong>Redis:</strong> localhost:6379</li>
            <li><strong>RabbitMQ Management:</strong> <a href="http://localhost:15672">http://localhost:15672</a></li>
            <li><strong>Prometheus:</strong> <a href="http://localhost:9090">http://localhost:9090</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
