.PHONY: db-migrate db-rollback db-create assets-precompile bundle-install gem-install scaffold

.DEFAULT_GOAL = help

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

db-create: ## Création de la base de données
	docker compose run --rm web rake RAILS_ENV=development db:create

db-migrate: ## Faire du migrate
	docker compose run --rm web bundle exec rails RAILS_ENV=development db:migrate

db-seed: ## Charger les données initial de la base
	docker compose run --rm web rake RAILS_ENV=development db:seed

bundle-install: ## Installer tous les bundles
	docker compose run --rm web bundle install
