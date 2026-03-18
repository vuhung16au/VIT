SHELL := /bin/zsh

NPM_CANDIDATE := /opt/homebrew/bin/npm
ifeq ($(wildcard $(NPM_CANDIDATE)),)
NPM := npm
else
NPM := $(NPM_CANDIDATE)
endif

PACKAGE_JSONS := $(shell find . \
	\( -path '*/node_modules/*' -o -path '*/.next/*' -o -path '*/dist/*' -o -path '*/coverage/*' -o -path '*/.turbo/*' -o -path '*/.vite/*' \) -prune -o \
	-name package.json -print | sort)
PACKAGE_DIRS := $(sort $(patsubst %/,%,$(dir $(PACKAGE_JSONS))))

.PHONY: all build clean list size

all: build

list:
	@if [ -z "$(strip $(PACKAGE_DIRS))" ]; then \
		echo "No npm projects found in $(CURDIR)"; \
	else \
		printf '%s\n' $(PACKAGE_DIRS); \
	fi

size:
	@echo "Week: $(notdir $(CURDIR))"
	@if [ -z "$(strip $(PACKAGE_DIRS))" ]; then \
		du -sh . 2>/dev/null; \
	else \
		for dir in $(PACKAGE_DIRS); do \
			echo "-- $$dir"; \
			du -sh "$$dir" 2>/dev/null; \
			for target in node_modules .next dist coverage .turbo .vite; do \
				if [ -d "$$dir/$$target" ]; then \
					du -sh "$$dir/$$target" 2>/dev/null; \
				fi; \
			done; \
		done; \
	fi

build:
	@if [ -z "$(strip $(PACKAGE_DIRS))" ]; then \
		echo "No npm projects found in $(CURDIR)"; \
		exit 0; \
	fi
	@set -e; \
	for dir in $(PACKAGE_DIRS); do \
		echo "==> building $$dir"; \
		if [ ! -d "$$dir/node_modules" ]; then \
			(cd "$$dir" && $(NPM) install); \
		fi; \
		if grep -q '"build"[[:space:]]*:' "$$dir/package.json"; then \
			(cd "$$dir" && $(NPM) run build); \
		else \
			echo "Skipping $$dir (no build script)"; \
		fi; \
	done

clean:
	@if [ -z "$(strip $(PACKAGE_DIRS))" ]; then \
		echo "No npm projects found in $(CURDIR)"; \
		exit 0; \
	fi
	@set -e; \
	for dir in $(PACKAGE_DIRS); do \
		echo "==> cleaning $$dir"; \
		rm -rf "$$dir/node_modules" "$$dir/.next" "$$dir/dist" "$$dir/coverage" "$$dir/.turbo" "$$dir/.vite"; \
	done
