# Useful commands

## Initial 
```
npx prisma migrate dev --name init 
```

```
npx prisma migrate dev
```


## Run inside docker
```
docker run --name devs-postgres -p 5432:5432 -e POSTGRES_USER=demo -e POSTGRES_PASSWORD=demo -e POSTGRES_DB=demo -d postgres
docker exec -it postgres bash
```


