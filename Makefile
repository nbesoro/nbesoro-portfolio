build:
	docker compose build

up:
	docker compose up

up-d:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

logs-back:
	docker compose logs -f backend

logs-front:
	docker compose logs -f frontend

restart:
	docker compose restart

migrate:
	docker compose exec backend python manage.py migrate

makemigrations:
	docker compose exec backend python manage.py makemigrations

createsuperuser:
	docker compose exec backend python manage.py createsuperuser

collectstatic:
	docker compose exec backend python manage.py collectstatic --noinput

shell:
	docker compose exec backend python manage.py shell
