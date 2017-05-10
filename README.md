# Northcoders News API

Northcoders News API is a RESTful api which has been created using Node.js, Express.js, MongoDB and Mongoose. The MongoDB database is hosted on mLabs and deployed through Heroku. You can visit the API [here.](https://gentle-wave-92796.herokuapp.com/api)

This repo contains all the work that has gone into the backend of the project. To find out more about the front end which the Northcoders News API supplies, please visit my front end repo [here!](https://github.com/JoshMarsden94/NC-News-Frontend)

## Getting Started

The API and all of its endpoints have been fully tested using Mocha, Chai and Supertest. If you would like to run the tests please ensure you have Node v7.0.0 or higher installed. You can check this by entering the following command into your terminal:
```s
node -v
```
If you do not have the correct version of node click [here](https://nodejs.org/en/download/) to install.

To now run the tests please clone the project, cd into the repo, install the dependencies and then run the tests:
```s
git clone https://github.com/JoshMarsden94/NC-News-Backend.git

cd NC-News-Backend

npm install

npm test
```

## API Routes

### The availbale endpoints for the API are listed below;

```s
GET /api/topics
```
Get all the topics

```s
GET /api/topics/:topic_id/articles
```
Return all the articles for a certain topic

```s
GET /api/articles
```
Returns all the articles

```s
GET /api/articles/:article_id/comments
```
Get all the comments for a individual article

```s
POST /api/articles/:article_id/comments
```
Add a new comment to an article. This route requires a JSON body with a comment key and value pair e.g: {"comment": "This is my new comment"}

```s
PUT /api/articles/:article_id
```
Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down' e.g: /api/articles/:article_id?vote=up

```s
PUT /api/comments/:comment_id
```
Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down' e.g: /api/comments/:comment_id?vote=down

```s
DELETE /api/comments/:comment_id
```
Deletes a comment

