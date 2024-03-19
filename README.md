
# Croco Book Store


## Installation




- copy `.env.example` to `.env`
- run `docker-compose up` to run postgres or run pg locally without docker
- `npm i`
- `npm run start:dev`


    
## Documentation

Swagger docs will be scaffolded @
[Documentation](http://localhost:3000/docs)



## Usage/Examples

TRY
```
POST localhost:3000/books body: {
    "title": "Harry Potter2",
    "pages": [
        {
            "number": 1,
            "content": "Page one content Goes Here"
        },
        {
            "number": 2,
            "content": "Page Two content Goes Here"
        }
    ],
    "author": {
        "name": "J.K Rolling"
    }
}
```

Will get unauthorized

Register
```
POST localhost:3000/auth/register body: {
    {
        "email": "me@my.com",
        "password": "pass"
    }
}
```

will receive auth_token we can use to 
try `books` endpoint again now with auth headers
```
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4MTM3NjYsImV4cCI6MTcxMDgxMzgyNn0.lEqdMnf8pVw7cbOK39VVmoGUHxBk-a0pOw6oEMWPu0I'
```

Get books with pagination

```
GET localhost:3000/books?page=2&take=1
```
