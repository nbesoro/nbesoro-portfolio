#!/bin/bash

python manage.py migrate --noinput
gunicorn backend.wsgi:application --bind :8004