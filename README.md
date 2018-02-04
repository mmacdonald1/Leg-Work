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
* D3
* AJAX
* Javascript
* Bootstrap
* CSS

## Walkthrough
The user is first given the option to sign up or login. If the user signs up, the Passport authentication will check if they already exist in the database. If they do not already exist, the user will be added to the database and redirected to the user dash.

![SignUp](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/signup.png)

Logging in also uses Passport to check the database for any existing user that matches that email and password. If the email and password are authenticated the user is redirected to the user dash.

![Login](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/login.png)

On the user dash is a table of the applications that the user has entered and the form to add another application.

![Applications](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/applications.png)

If the user wants to add a company they go to the add a company form to submit the information. The user is then redirected to the companies table page.

![Add](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/add-company.png)

![Companies](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/companies.png)

The user also has an option to see the stages of their collective applications displayed in a piechart.

![Analytics](https://github.com/mmacdonald1/Leg-Work/blob/master/public/assets/images/analytics.png)
