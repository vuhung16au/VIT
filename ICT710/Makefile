SHELL := /bin/zsh

WEEKS := Week00 Week01 Week02 Week03 Week04 Week05 Week06 Week07 Week08 Week09 Week10 Week11 Week12

.PHONY: all build clean list size

all: build

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
