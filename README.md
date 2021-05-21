# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies
`docker` , `docker-compose` and `Dynamic Web TWAIN V17.0`
* Configuration
1. Clone repos
        
`git clone https://github.com/Zakui/dwt-sample.git`
2. Build project
`docker-compose build`

3. Create database          
`make db-create`

4. Database initialization
Migrate database 
        
`make db-migrate`

5.Load sample data
        
`make db-seed`
6. Run the app
Before make sure the port `3000` is free on your computer
`docker-compose up`

then go to [http://localhost:3000](http://localhost:3000/) on a web browser to see the application Welcome.

If you are using Docker Machine, then `docker-machine ip MACHINE_VM` returns the Docker host IP address, to which you can append the port (`<Docker-Host-IP>:3000`).

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
