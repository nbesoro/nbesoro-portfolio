#!/bin/sh

set -e

echo "Waiting for database..."
MAX_RETRIES=30
RETRY=0
while [ $RETRY -lt $MAX_RETRIES ]; do
    if python -c "import socket; socket.create_connection(('$DB_HOST', ${DB_PORT:-5432}), timeout=2)" 2>/dev/null; then
        echo "Database is ready!"
        break
    fi
    RETRY=$((RETRY + 1))
    echo "Waiting for database... ($RETRY/$MAX_RETRIES)"
    sleep 2
done

if [ $RETRY -eq $MAX_RETRIES ]; then
    echo "ERROR: Could not connect to database after $MAX_RETRIES attempts"
    exit 1
fi

echo "Running migrations..."
python manage.py migrate --noinput

echo "Collecting static files to S3..."
python manage.py collectstatic --noinput 2>/dev/null || true

echo "Starting Gunicorn on port 8004..."
exec gunicorn \
    --bind 0.0.0.0:8004 \
    --workers 2 \
    --timeout 120 \
    --access-logfile - \
    --error-logfile - \
    backend.wsgi:application
