##  --- prerequisites   --

1. run the python flask server
2. start MySQl server and create a database in name of "pahari"
3. keep the MySQl DB credentials ready
4. change file name 'example.env' to '.env' 
5. in '.env' file : fill up the DB and python-flask server details


## --- install node packages 

npm install

## ---- run the server 

node index

## ---- API end points

1. just to check , if server is running
    GET http://localhost:5000 HTTP/1.1

2. this route call the flask api and save the data in MySQL , and give ids ( to and from )
    GET http://localhost:5000/insert HTTP/1.1

3. the to and from ids can be use to retrive data again
    GET http://localhost:5000/data?from=53&to=69 HTTP/1.1