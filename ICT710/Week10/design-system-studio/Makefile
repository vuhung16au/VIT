SHELL := /bin/zsh

NPM_CANDIDATE := /opt/homebrew/bin/npm
ifeq ($(wildcard $(NPM_CANDIDATE)),)
NPM := npm
else
NPM := $(NPM_CANDIDATE)
endif

.PHONY: help install ensure-deps build record gif demo deploy vercel-deploy clean

help:
	@echo "Recording Makefile ($(notdir $(CURDIR)))"
	@echo "  make install  Install npm dependencies"
	@echo "  make build    Run the project build script"
	@echo "  make record   Record a demo video"
	@echo "  make gif      Convert the latest .webm to GIF"
	@echo "  make demo     Run record + gif"
	@echo "  make deploy   Deploy to Vercel production"
	@echo "  make clean    Remove build output and temporary recordings"

install:
	PATH=/opt/homebrew/bin:$$PATH $(NPM) install

ensure-deps:
	@if [ ! -d node_modules ]; then \
		echo "Installing dependencies for $(notdir $(CURDIR))..."; \
		PATH=/opt/homebrew/bin:$$PATH $(NPM) install; \
	fi

build: ensure-deps
	$(NPM) run build

record: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH $(NPM) run record

gif: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH $(NPM) run gif

demo: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH $(NPM) run demo:record

vercel-deploy: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH npx vercel --prod

deploy: vercel-deploy

clean:
	rm -rf node_modules .next images/*.webm
