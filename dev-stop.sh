#!/usr/bin/env bash

## Stop Redis
eval $(docker-machine env example-reactjs-docker)
docker stop $(docker ps -q -f "name=example-reactjs")
docker rm $(docker ps -a -q -f "name=example-reactjs")

## Stop Docker
docker-machine stop example-reactjs-docker