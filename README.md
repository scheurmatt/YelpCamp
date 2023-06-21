# YelpCamp
YelpCamp is a web application developed as part of Colt Steele's web developer bootcamp 2023. It is built using the Node.js framework, along with Express for server-side routing and MongoDB for the database.

**Technologies Used**
The following technologies and tools were used in the development of YelpCamp:

HTML/Bootstrap: Used for creating the structure and styling of the web pages.
CSS: Used for additional styling and customization.
JavaScript: Used for client-side interactivity and functionality.
Node.js: A JavaScript runtime used for server-side development.
MongoDB: A NoSQL database used for storing data.
npm packages: Various packages were utilized to enhance the functionality of the application, including:
body-parser: Used for parsing request bodies.
express, express-session: Used for building the web application and managing user sessions.
ejs: A templating engine used for generating dynamic HTML.
mongoose: An Object Data Modeling (ODM) library for MongoDB, used for interacting with the database.
passport, passport-local, passport-local-mongoose: Used for user authentication and authorization.
method-override: Used to override HTTP methods, enabling PUT and DELETE requests.
connect-flash: Used for displaying flash messages to users.

**Getting Started**
Create an .env file and add values to the following variables:

CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
CLOUDINARY_KEY=<Your Cloudinary key>
CLOUDINARY_SECRET=<Your Cloudinary secret>
MAPBOX_TOKEN=<Your Mapbox token>
DB_URL=<Your MongoDB atlas URL or local MongoDB URL>
  
Make sure you have MongoDB installed on your system In a terminal window, initialize a MongoDB Database

$ ./mongod
  
In a second terminal window, access the MongoDB Database with Mongoose

$ mongoose
  
In a third terminal window, install dependencies using npm:

$ npm install
  
And then run the application with

$ npm start
  
or for hot reloading (recommended)

$ nodemon app.js

**Screenshots**
![screenshot1](https://github.com/scheurmatt/YelpCamp/assets/127687629/5dabec29-f737-4588-8ad8-c22992d82686)
![screenshot2](https://github.com/scheurmatt/YelpCamp/assets/127687629/218f7c19-acef-4487-b749-413b5507f031)
![screenshot0](https://github.com/scheurmatt/YelpCamp/assets/127687629/334cbdcc-f9d9-484f-92d1-366f8672b7af)
