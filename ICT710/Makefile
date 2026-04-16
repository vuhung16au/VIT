SHELL := /bin/zsh

WEEKS := Week00 Week01 Week02 Week03 Week04 Week05 Week06 Week07 Week08 Week09 Week10 Week11 Week12
RECORDING_WEEKS := Week01 Week02 Week03 Week04 Week05 Week06 Week07 Week08 Week09 Week10 Week11 Week12
RECORDING_PROJECTS := \
	Week01/01.Create-Personal-Website \
	Week01/02.Doctor-App \
	Week02/01.Booking-App-Design \
	Week02/02.Booking-App \
	Week03/cognitive-social-ux \
	Week03/patient-journey \
	Week03/personal-training-website \
	Week05/feedback-forge \
	Week06/interface-playground \
	Week07/persona-first \
	Week08/requirements-hub \
	Week09/prototype-evolution \
	Week10/design-system-studio \
	Week11/evaluation-toolkit \
	Week12/usability-lab-simulator

RECORDING_WEEK_TARGETS := \
	week01-record week02-record week03-record week04-record week05-record week06-record week07-record week08-record week09-record week10-record week11-record week12-record \
	week01-gif week02-gif week03-gif week04-gif week05-gif week06-gif week07-gif week08-gif week09-gif week10-gif week11-gif week12-gif \
	week01-demo week02-demo week03-demo week04-demo week05-demo week06-demo week07-demo week08-demo week09-demo week10-demo week11-demo week12-demo \
	week01-audit week02-audit week03-audit week04-audit week05-audit week06-audit week07-audit week08-audit week09-audit week10-audit week11-audit week12-audit \
	week01-vercel-deploy week02-vercel-deploy week03-vercel-deploy week04-vercel-deploy week05-vercel-deploy week06-vercel-deploy week07-vercel-deploy week08-vercel-deploy week09-vercel-deploy week10-vercel-deploy week11-vercel-deploy week12-vercel-deploy

.PHONY: all build clean help list size record gif demo record-all gif-all demo-all audit audit-all vercel-deploy vercel-deploy-all deploy $(RECORDING_WEEK_TARGETS)

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
	@echo "  make record         Record demo videos for all supported projects"
	@echo "  make gif            Convert recent recordings to GIFs for all supported projects"
	@echo "  make demo           Run full recording + GIF workflow for all supported projects"
	@echo "  make audit          Run security audit for all supported projects (uses npm audit)"
	@echo "  make vercel-deploy  Deploy all supported projects to Vercel"
	@echo "  make record-all     Alias for make record"
	@echo "  make gif-all        Alias for make gif"
	@echo "  make demo-all       Alias for make demo"
	@echo "  make audit-all      Alias for make audit"
	@echo "  make deploy         Alias for make vercel-deploy"
	@echo "  make vercel-deploy-all Alias for make vercel-deploy"
	@echo "  make week01-demo    Run the full recording workflow for Week01"
	@echo "  make week07-demo    Run the full recording workflow for Week07"
	@echo "  make week12-demo    Run the full recording workflow for Week12"
	@echo "  make weekXX-record / weekXX-gif / weekXX-demo / weekXX-audit / weekXX-vercel-deploy also work for Week01 to Week12"

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

record:
	@set -e; \
	for project in $(RECORDING_PROJECTS); do \
		echo "==> $$project"; \
		$(MAKE) -C "$$project" record; \
	done

gif:
	@set -e; \
	for project in $(RECORDING_PROJECTS); do \
		echo "==> $$project"; \
		$(MAKE) -C "$$project" gif; \
	done

demo:
	@set -e; \
	for project in $(RECORDING_PROJECTS); do \
		echo "==> $$project"; \
		$(MAKE) -C "$$project" demo; \
	done

# Security audit using npm (works with bun-managed projects)
audit:
	@for project in $(RECORDING_PROJECTS); do \
		echo "==> $$project"; \
		if [ -f "$$project/package.json" ]; then \
			(cd "$$project" && \
				npm audit fix --legacy-peer-deps 2>/dev/null || \
				npm audit fix --force --legacy-peer-deps 2>/dev/null || \
				true; \
				echo "Audit report:"; \
				npm audit || true); \
		else \
			echo "Skipping $$project (no package.json)"; \
		fi; \
	done

vercel-deploy:
	@for project in $(RECORDING_PROJECTS); do \
		echo "==> $$project"; \
		if [ -f "$$project/vercel.json" ] || [ -f "$$project/package.json" ]; then \
			(cd "$$project" && npx vercel --prod) || { \
				echo "⚠️  Deployment failed for $$project, continuing..."; \
			}; \
		else \
			echo "Skipping $$project (no vercel.json or package.json)"; \
		fi; \
	done

record-all: record

gif-all: gif

demo-all: demo

audit-all: audit

deploy: vercel-deploy

vercel-deploy-all: vercel-deploy

define RECORDING_WEEK_RULES
week$(1)-record:
	@echo "==> Week$(1)"
	@$(MAKE) -C "Week$(1)" record

week$(1)-gif:
	@echo "==> Week$(1)"
	@$(MAKE) -C "Week$(1)" gif

week$(1)-demo:
	@echo "==> Week$(1)"
	@$(MAKE) -C "Week$(1)" demo

week$(1)-audit:
	@echo "==> Week$(1)"
	@$(MAKE) -C "Week$(1)" audit

week$(1)-vercel-deploy:
	@echo "==> Week$(1)"
	@$(MAKE) -C "Week$(1)" vercel-deploy
endef

$(foreach week,01 02 03 04 05 06 07 08 09 10 11 12,$(eval $(call RECORDING_WEEK_RULES,$(week))))
