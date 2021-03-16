## project

* To make this project, according to my work role on my current job, in this application I used some latest Front technologies, Control System, IDE, Debugging tool, Database, Operating System these all are mentioned below:

* **Webtechnologies** - **React JS**, **Node JS**, **HTML5**, **CSS3**, **JavaScript**, **Bootstrap**, **AJAX**, **JSON**
* **ControlSystem** - **GitHub for source and version control**
* **Database** - **MongoDB** performed **CURD operations**
* **DebuddingTool** - **Chrome Developer tool**
* **IDE** - **Visual Studio code**
* **Operating Syatem** - **macOs**, **Windows**

**If I will do modification I will push new changes on it**
**Note: For run this react app in local environment, we have to add node modules packages to our system. 

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

### Sub Topics:

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
  * after this command our database is ready to run on server port for ex. (https://localhost:3000/)
* After started json server, I had to start server for run our app
  **npm start**

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
