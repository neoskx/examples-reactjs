#!/usr/bin/env bash

docker-machine create --driver virtualbox example-reactjs-docker
docker-machine start example-reactjs-docker
eval $(docker-machine env example-reactjs-docker)

docker pull mongo

DOCKER_IP=$(docker-machine ip example-reactjs-docker)

echo *** $DOCKER_IP

## Cleanup containers
docker stop $(docker ps -q -f "name=example-reactjs")
docker rm $(docker ps -a -q -f "name=example-reactjs")

## Start Redis
docker run --name example-reactjs -p 27017:27017 -d mongo

export MONGODB=$DOCKER_IP

## npm install
npm install

## start server
npm start