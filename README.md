## restaurant

### Qucick Summary of my application
* In my application, I add some features like, **Security in Login**
* **first USer have to do compulsary "Loggedin" in my application.**
* I put menus in my app like **"Home", "List", "Create", "Search", "Login/Logout"**
* **User can't see all pages content from menu without do "Login"**
* After login User can see all the pages and can do operations like **READ the list of all restaurants from menu "List", ADD new restaurant from "Create page",     if User want UPDATE recored from "List", he/she can also edit records with click on Edit icon in "List", as well as user can also DELETE the unwanted records     from the "List" with click earse icon in last column.**    
* After Add, Update and Delete operation **user can see new Added, Edited, Deleted records in "List" from menu**.

### To make this project, **according to my work role on my current job**, in this application I used some latest Front technologies, Control System, IDE, Debugging tool, Database, Operating System these all are mentioned below:

* **Webtechnologies** - **React JS**, **Node JS**, **HTML5**, **CSS3**, **JavaScript**, **Bootstrap**, **AJAX**, **JSON**
* **ControlSystem** - **GitHub for source and version control**
* **Database** - **MongoDB** performed **CURD operations**
* **DebuddingTool** - **Chrome Developer tool**
* **IDE** - **Visual Studio code**
* **Operating Syatem** - **macOs**, **Windows**

## For run my application in local syatem, follow the below steps:
* First clone it from github.com by copy the link and give command in terminal **git clone https://github.com/sneha787/restaurant.git**
* Second most **imp step is install node modules packages like react react-router-dom** by command **npm i react react-router-dom node**
* Third step; move to db folder with command **cd db
* start json server to see database on fly with cmd **json-server --watch db.json** 
* Fourth step; open new window in terminal and run the app with **npm start

**If I will do modification I will push new changes on it** 

## I mentioned here my topics, which I included to create restaurant app:

### Outer Topics:

* Make a Project Structure
* Routing
* Login
* API calls
* Listing of restaurants
* Make new restaurant
* Update restaurant details
* Delete restaurant
* Search restaurant
* Style and Design

### Sub Topics-(Descriptions of each outer topics):

#### Make a Project Structre: CLI steps
* create project skeleton by terminal command
  **npx create-react-app project**
* for API server setup
  **npm i -g json-server**
* Make a folder for database storage
  **mkdir db**
* Move to that cd folder with
  **cd db**
* Create a new files for database
  **touch db.json**
* to see list directory
  **ls**
* start json server with 
  **json-server --watch db.json** 
  * after this command our database is ready to run on server port **https://localhost:3000/**
* After started json server, I had to start server for run our app
  **npm start** and it will open in new different port **http://localhost:3001/login**

### Setup Routing Steps:
* First I installed package router-dom to my project with command
  **npm i react-router-dom**
* Make all Component files in VS code under src folder
  * ReataurantList.js
  * ReataurantDetails.js
  * ReataurantSearch.js
  * ReataurantCreate.js
  * RestaurantUpdate.js
* Make Link for all Components
* Make Route for all Components

### Listing API Integration
* Make an API
* Test it with POSTAMN
* Fetch API Data
* Show API Data

* Write some dummy data(entries) in db.json file
* Check API in POSTMAN with **GET** operation
* Call and make API in **RestaurantList.js**

### Add Bootstrap in my app
* First I installed packages for bootstrap and react-bootstrap with command
  **npm i bootstrap react-bootstrap**
* for use importe package add line to top of in .js file
  **import "bootstrap/dist/css/bootstrap.min.css";**
* Add Navbar
* Add Table Listing

### Integrate POST API for Add new restaurant(CREATE operation)
* Test API with POSTMAN
* Make Input fields
* Fire POST API
* Test new entry is done or not

### Update Restaurant Entry(UPDATE operation)
* Test PUT API for Update operaion with POSTMAN
* Add edit link in list
* Pass ID as URL Props
* GET API for fetch Data and show it in the text inputs
* PUT API for update data

### Add Font Awesome Icons
* Insatall package for icon with command in terminal
  **import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";**
* import icons
  **import {
    faFolderPlus,
    faHome,
    faList,
    faSearch,
    faSignOutAlt,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";**
* Use icons 

### Delete operation with API (DELETE operation)
* Test API with POSTMAN
* Write code for DELETE API
* Test list

### Search API (READ operation)
* Test search API on POSTMAN
* make a textbox for search
* call Search API
* show searched databin list

### Login with API
* Make a router for login page
* Make login form
* Make API for login with json-server
* Hit API for login
* make Rdirect on list page after login

### Login with Protected Routing
* put Navbar in different file
* Add localstorage on login
* Add logout button
* Make protected routed file
* Apply protected routes
* test
