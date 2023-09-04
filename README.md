# Gusteau's
This repository is a CRUD RESTful API for a ToDo list in NodeJS with TypeScript, using PostgreSQL.

## Dependecies
* Docker
* Docker-compose

## Instalation
1. Clone the repository
2. `cd gusteaus_packiot`
3. `docker-compose build`
4. `docker-compose up -d`
5. `docker-compose exec node-app npm run migrate`
5. To run tests: `docker-compose run node-app npm run test`