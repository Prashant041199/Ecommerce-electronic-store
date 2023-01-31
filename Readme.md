# Ecommerce-electornic-store

This is a sample application that demonstrates an E-commerce website using the MERN stack. The application loads products a MongoDB database and displays them. Users can select to display products in a single category. Users can click on any product to get more information including pricing, reviews and rating. Users can select items and add them to their shopping cart

->This project was build using react.js, mongodb, express and nodejs and is fully responsive (Can be accessed on any Device).

# Prerequisite:

1) Node.js should be installed on you pc.
2) Mongodb should be installed on you pc and should be open on PORT (27017).
3) A Database with name ecommerce should be created before installing the dependencies.

Note:

1) I have not included shipping address and payment options as this can lead to privacy violation.

# Steps to run the app:

1) Backend

> cd backend

> cd npm install

> nodemon index.js

-> This will install all the dependencies related to backend service and start the backend server

2) Frontend

> cd frontend

> npm install

> npm start

-> This will install all the fronend dependencies and npm start will start the application on port(3000)

# Entering product details:

->Open postman and creat a post request to (http://localhost:5000/products)

->Go to body tab and enter object in below format:
	

	{

      "id": "abx",

      "name": "iphone x",

      "company": "apple",

      "price": 6000000,

      "image": "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",

      "category": "mobile",

      "featured": true

    } 


Note: 

1)All the fields are mandatory.

2)Make "featured" as true only if you want to display it on the landing page.

3)Use online image source in img as shown in above example. 


# Functionalities

1) User can signup/login onto the website.

2) Used bcryptjs(slow hash) to hash password before storing in database, so that it is secured.

3) Used multiple design techniques to enhance the look of this app.

4) You can sort items based on price, brand, and type of product on the Products page.

5) Contact page is also linked with database and all the quesries are stored in mongodb.

6) Cart items are updated on realtime in database as well as frontend.

7) User cannot go to login or signup page once user is already logged in. By entering the url manually, page will automatically redirect to homepage.

# Technologies used

1)React.JS: Used react tools and to create frontend components of this web application.

2)BootStrap: For faster production used bootstrap and customised components according to design flow.

3)MongoDb: Used mongodb for storing user details, login information, products information, and query information.

4)Express: Used express for api.

5)Nodejs: Used nodejs for running web applications outside the client's browser.


