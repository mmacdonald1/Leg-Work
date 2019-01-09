# Leg Work

An application manager to help ease the job search process.

## Live Demo

https://legwork.herokuapp.com/


## Local Setup

1. Set up MySQL with the database from the schema.sql
2. Run ```npm install``` in the root folder

## Tech Used
* MySQL
* Sequelize
* Passport
* Handlebars
* Node
* Express
* Javascript
* Bootstrap
* CSS

## Documentation of API
* GET /members
  - Queries the members database for the user id and retrieves the user, application, and company data.
* POST /api/login
  - Authenticates the user and redirects to user dash.
* POST /api/signup
  - Posts the username, email, and password to the database and redirects to the user dash.
* GET /logout
  - Logs the user out of passport and redirects to the sign up page. 
* POST /fetchApps
  - Uses a filter reduce function to relate company name and id from the companies database to the applications database and display applications in a table.
* POST /fetchComps
  - Retrieves companies data and displays each company in a table.
* GET /api/piechart
  - Retrieves data by the user id to send to D3 piechart.


## Walkthrough
The user is first given the option to sign up or login. If the user signs up, the Passport authentication will check if they already exist in the database. If they do not already exist, the user will be added to the database and redirected to the login page.

![SignUp](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/signup.png)

Logging in also uses Passport to check the database for any existing user that matches that email and password. If the email and password are authenticated the user is redirected to the user dash.

![Login](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/login.png)

On the user dash is a table of the applications that the user has entered and the form to add another application. From here the user can also click the company name and see the companies page.

![Applications](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/applications.png)

If the user wants to add a company they go to the add a company form to submit the information. The user is then redirected to the companies table page.

![Add](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/add-company.png)

![Companies](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/companies.png)


