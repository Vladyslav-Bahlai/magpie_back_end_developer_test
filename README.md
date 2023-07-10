## Description

Back-end developer test task for Magpie protocol application, written on Node.js using NestJS framework. Application connects to postgres database, specified by user in .env file, creates "pool" table inside the database, fetches pools from Uniswap V3 API and synchronises the data in the database every 30 minutes. 

## Setting up the app

1. Install node (version >= 16) and npm on your computer.

2. To install project dependencies, open console in project root folder and run the following command:
```bash
$ npm install
```

3. App uses postgres database to store data. To set up database, create .env file in project root folder, add the following variables to it and set configuration values to appropriate variables.  
```bash
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

## Running the app

To run the app, open console in project root folder and run the following command:
```bash
$ npm run start
```
