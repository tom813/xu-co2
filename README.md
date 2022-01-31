# Team Project for CO2 of Ben, Philipp and Tom

## Project aim

We wanted to create a small real world online shop for buying adresses. The users should get a well structured page as well as enough information about the data he is buying. We also wanted to go with a fresh layout. 

## Project technologies

Because this is mainly a frontend project but we also have to make some database calls, we choosed next.js as our framework. 
https://nextjs.org/

We also used a CSS Library called Chakra 
https://chakra-ui.com/

## Page structure

'/' main page here the user can find general information

'/overview' overview page here we list all of our products and some information

'/[product]' product page the url is generated after the name of the product and the user can find all information about the product here

## Project structure

### /components

Here we defined our reusable Elements and our sections.

### lib

Here we made our database call

### pages

Each file in this folder results in a route. If you create a file test.js it will be reachable under localhost:300/test same with folders

In the api folder we defined our backend routes and the logic

The other files and folders are for our frontend

### public

Here we listed all our sources like images, icons and download files

### styles

Here we would make our stylings bit we have chakra for that
