###########
# BUILDER #
###########

# pull official base image
FROM python:3.14-alpine as builder

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# lint
RUN pip install --upgrade pip


# install dependencies
COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt
COPY . .


#########
# FINAL #
#########

# pull official base image
FROM python:3.14-alpine

# create directory for the app user && create the app user
RUN mkdir -p /home/app && addgroup -S nbesoro && adduser -S -G nbesoro nbesoro

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# install dependencies
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --no-cache /wheels/*

# copy project
COPY . $APP_HOME

# chown all the files to the app user
RUN chown -R nbesoro:nbesoro $APP_HOME

# change to the app user
USER nbesoro

# Run migrate and Collect all static
# RUN python manage.py collectstatic --noinput
EXPOSE 8201
# CMD python manage.py runserver 0.0.0.0:8000 --noreload
CMD ["sh", "entrypoint.sh"]


