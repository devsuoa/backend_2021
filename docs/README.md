# Backend Workshop
Here where your'll find all the information about the tools used in this workshop.
Note: The VM we rented may be taken down after the workshop.

The following docs is for the folder in the template `backend-template`

## Setup database yourself
In the workshop we have provided you with a postgres database. If you want to run the database yourself we recommend the following:

1. Install [Docker](https://www.docker.com/get-started)
2. Run Container using 
    ```
    docker run --name devs-postgres -p 5432:5432 -e POSTGRES_USER=demo -e POSTGRES_PASSWORD=demo -e POSTGRES_DB=demo -d postgres
    ```
    Note: Username = demo, Password = demo, Database = demo, IP = localhost, Port = 5432

## View Database
There a multiple ways to access the database. 
- [TablePlus](https://tableplus.com/)
- DEVS hosts pgweb - http://52.187.198.167:8081
- [pgweb](https://github.com/sosedoff/pgweb) - https://pgweb-demo.herokuapp.com

## How to setup Prisma Client
In order to run the workshop you need to install the [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/).

### Install the Prisma Client
```
npm install @prisma/client
```

### Generate prisma schema
```
npx prisma generate
```

### Define the database URL connection string
Open `./.env` and change the following variables:

```
postgresql://USERNAME:PASSWORD@52.187.198.167:5432/DATABASE_NAME?schema=public
```

Replace: 
`USERNAME` with the given Username
`PASSWORD` with the given Password
`DATABASE_NAME` with the given Database Name

### Define schema 
Open `./prisma/schema.prisma` and add the following:
```js
model Event {
  id Int @id @default(autoincrement())
  name String
  building String
  location String
  start_time DateTime
  description String
  link String
  image_uri String
}
```

## Create the first migration 
Create Migration
```
npx prisma migrate dev --name init 
```
Apply Migration
```
npx prisma migrate dev
```


### Import Prisma Client
```
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
```
Read more at [prisma docs](https://www.prisma.io/docs/concepts/components/prisma-client)