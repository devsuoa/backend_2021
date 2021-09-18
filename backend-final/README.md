# Commands to setups

## Initial 
```
npx prisma migrate dev --name init 
```

```
docker run --name devs-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```