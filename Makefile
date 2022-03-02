build-dev:
	docker-compose up --build -d

stop-dev:
	docker-compose down -v --rmi local

build-prod:
	docker-compose -f docker-compose.prod.yml up --build -d

stop-prod:
	docker-compose -f docker-compose.prod.yml down -v --rmi local