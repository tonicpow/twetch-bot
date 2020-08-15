.PHONY: clean

audit: ## Checks for vulnerabilities in dependencies
	@npm audit

clean: ## Remove previous builds and any test cache data
	@if [ -d $(DISTRIBUTIONS_DIR) ]; then rm -r $(DISTRIBUTIONS_DIR); fi

install: ## Installs the dependencies for the packge
	@npm install

lint: ## Runs the standard-js lint tool
	@npm run lint

outdated: ## Checks for outdated packages via npm
	@npm outdated

start: ## Starts running the bot
	@npm run start
