#!/bin/bash
git pull
mvn clean package
docker down
docker up -d