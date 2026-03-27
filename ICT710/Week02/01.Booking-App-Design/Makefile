SHELL := /bin/zsh

NPM_CANDIDATE := /opt/homebrew/bin/npm
ifeq ($(wildcard $(NPM_CANDIDATE)),)
NPM := npm
else
NPM := $(NPM_CANDIDATE)
endif

.PHONY: help install ensure-deps record gif demo clean

help:
	@echo "Recording Makefile ($(notdir $(CURDIR)))"
	@echo "  make install  Install npm dependencies"
	@echo "  make record   Record a demo video"
	@echo "  make gif      Convert the latest .webm to GIF"
	@echo "  make demo     Run record + gif"
	@echo "  make clean    Remove temporary recordings"

install:
	PATH=/opt/homebrew/bin:$$PATH $(NPM) install

ensure-deps:
	@if [ ! -d node_modules ]; then \
		echo "Installing dependencies for $(notdir $(CURDIR))..."; \
		PATH=/opt/homebrew/bin:$$PATH $(NPM) install; \
	fi

record: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH $(NPM) run record

gif: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH $(NPM) run gif

demo: ensure-deps
	PATH=/opt/homebrew/bin:$$PATH $(NPM) run demo:record

clean:
	rm -rf node_modules images/*.webm
