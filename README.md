# Car-Enthusiasts
![image](https://user-images.githubusercontent.com/81110745/132675888-db4f0317-0420-4b5b-a36a-af7be3cf70af.png)  
Find the deployed application here:https://car-enthusiasts.herokuapp.com/

## Description
  ![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")  
Writing about cars is a passion. Car lovers spend plenty of time reading and writing about styles, models, and new developments. This blog contains:
1.	It will have Node.js and Express.js to create a RESTful API 
2.	We will Handlebars.js for page layout
3.	MySQL and the Sequelize ORM will be used to manage & structure database
4.	We will use GET and POST routes that will allow users to add comments and car images
5.	new library, package, or technology that we haven’t discussed – a package allow image upload/storage. With express js.
6.	It will use MVC methodology
7.	Each user will need to create an account before commenting/posting (Authentication) (express-session and cookies)
8.	We will protect API keys and sensitive information with environment variables

It's a CMS-style blog site similar to a Wordpress site, where car lovers can publish their blog posts and comment on other fans posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. It is deployed to Heroku.


## Table of Contents
- [Demo](#Demo)
- [Deployed](#Deployed)
- [User Story](#User-Story)
- [Installation](#installation)
- [Technology](#technology)
- [License](#license)
- [Questions](#Contact-Information)  

### Demo
![Screenshot](https://github.com/ChristopherBz/Car-Enthusiasts/blob/c298a76953a9eebddeb22ecba88116ba76647126/assets/Car%20Enthusiats.gif)

### Deployed
Find the deployed application here: https://car-enthusiasts.herokuapp.com/

### User-Story
AS A car enthusiast,
I WANT a simple website that uses the latest technologies
SO THAT I can share my latest car photos and stories



## Installation

To clone the repo:
```
git git@github.com:ChristopherBz/Car-Enthusiasts.git
``` 
Run 'npm install' to install dependencies  
Create a .env file and add your MySQL login details 
Enter 'npm start' in the terminal to run the server

## Technology

1. Node.js:  
Node.js is an open-source and cross-platform JavaScript runtime environment.
A Node.js app is run in a single process, without creating a new thread for every request.
Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking.

2. Sequelize:  
Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

3. MySQL:  
MySQL is a freely available open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). SQL is the most popular language for adding, accessing and managing content in a database. It is most noted for its quick processing, proven reliability, ease and flexibility of use.  

4. Express-handlebars: Handlebars is one of the most used templating engines for web applications “competing” with other well-known ones like Mustache js, Pug, EJS and others. It’s especially used on the server side along with the express js framework.  

5. Others: dotenv package(https://www.npmjs.com/package/dotenv), bcrypt package (https://www.npmjs.com/package/bcrypt), express-session (https://www.npmjs.com/package/express-session) & connect-session-sequelize (https://www.npmjs.com/package/connect-session-sequelize).  

## License

This application is released under ![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge").


## Contact-Information:
    *GitHub Username: ChristopherBz
    *GitHub Username: TristanLibeau
    *GitHub Username: ivany9
