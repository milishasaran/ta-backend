# news-weather-api

This is a server which provides the data for daily news and weather to the authenticated users.

# Tech stack

Runtime - NodeJS
Database - MongoDB
ORM - Mongoose
Routing - Express

## Signup customers

This api accepts email and password, then checks if the email already then store the email and encrypted password in mongoDB database.

## Login customers

This api accepts email and password, checks if the email already exists in the database, then verifies the password and returns the userdata and access token for authorization.

# Weather API

This is a third party API service which provides the weather data, which we return to client which are authorized.

# News API

This is a third party API service which provides the news data, which we return to client which are authorized.
