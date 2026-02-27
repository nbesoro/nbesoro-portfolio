build:
	docker compose build

up:
	docker compose up 

down:
	docker compose down

logs:
	docker compose logs -f web

restart:
	docker compose restart web

migrate:
	docker compose exec web python manage.py migrate

makemigrations:
	docker compose exec web python manage.py makemigrations

createsuperuser:
	docker compose exec web python manage.py createsuperuser

collectstatic:
	docker compose exec web python manage.py collectstatic --noinput

shell:
	docker compose exec web python manage.py shell

freeze:
	docker compose exec web pip freeze > requirements.txt
