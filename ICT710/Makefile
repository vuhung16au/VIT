SHELL := /bin/zsh

WEEKS := Week00 Week01 Week02 Week03 Week04 Week05 Week06 Week07 Week08 Week09 Week10 Week11 Week12

.PHONY: all build clean help list size

all: build

help:
	@echo "ICT710 Makefile"
	@echo ""
	@echo "Targets:"
	@echo "  make help   Print this help message"
	@echo "  make        Build all weeks"
	@echo "  make build  Build all weeks"
	@echo "  make clean  Clean build output and dependencies in all weeks"
	@echo "  make size   Show size summary for all weeks"
	@echo "  make list   List all weeks"

build:
	@set -e; \
	for week in $(WEEKS); do \
		echo "==> $$week"; \
		$(MAKE) -C "$$week" build; \
	done

clean:
	@set -e; \
	for week in $(WEEKS); do \
		echo "==> $$week"; \
		$(MAKE) -C "$$week" clean; \
	done

list:
	@printf '%s\n' $(WEEKS)

size:
	@set -e; \
	for week in $(WEEKS); do \
		echo "==> $$week"; \
		$(MAKE) -C "$$week" size; \
	done
