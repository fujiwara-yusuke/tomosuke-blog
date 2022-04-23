# docker-composeの起動  
```sh
  docker-compose up --build -d --project-directory .env
  docker-compose restart backend
  docker-compose build backend
  docker-compose down --rmi all --volumes
```


```
Error loading workspace: gopls requires a module at the root of your workspace. You can work with multiple modules by opening each one as a workspace folder. Improvements to this workflow will be coming soon, and you can learn more here: https://github.com/golang/tools/blob/master/gopls/doc/workspace.md.
```

````
  mysql -uroot -padmin -D blog
  mysql -uroot -padmin -D blog < ./docker-entrypoint-initdb.d/01_create_table.sql
  mysql -uroot -padmin -D blog < ./docker-entrypoint-initdb.d/02_insert_data.sql
````