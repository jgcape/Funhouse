Hello, welcome to Julian's Funhouse!

This is a very simple application designed to showcase some of the skills I (Julian) have learnt 
during an applied software engineering course at Deakin University.


It utilises multiple libraries, including but not limited to:

Jquery for advanced javascript manipulations;
Materialize for the UI interface;
Socket IO for real time comunications (In this case making my fancy hairdo appear!);
Mocha and Chai for testing; and
Express - Node web framework.


If you're reading this you've either downloaded this application already or are viewing the readme on github. If that's the case
clone the repo already and prepare to be blown away! ha ha.

The first thing you need to do to run this is have Node.js and NPM installed on your system. Once you've done that, 
use a terminal to navigate to the folder this is located in and run:

npm install

then

npm start

You should then be able to use a web browser to navigate to http://localhost:8080/ to open the page.


If you get an error like the one below the default running port 8080 may already be in use. 


            Error: listen EADDRINUSE


Close whatever application is using it and try again! If that isn't an option you can navigate to the file server.js and
change the 8080 in the following bit of code to another number, then try again with the url http://localhost:YOUR NUMBER GOES HERE/.
If you do decide to change the port you will also need to change it in the code at the top of test/test.js to enable the testing to work.


var port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/subscribers', subscribersRoute)


 
       
files in this repository
--------------------------------------------------------------------------------

`server.js` 

The server written with node.js.  Thie file contains the information for the program to run a web server and host the application.

---

`.gitignore`

List of file patterns that should **NOT** be uploaded to the git repository.


In this case, the contents of the file are:

    /node_modules

This indicates the node modules you installed with `npm install`.

---

`LICENSE`

The open source license for this sample; in this case, it's licensed under
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

---

`package.json`

Standard package.json file for node packages.  This file identifies node package dependencies during `npm install`.


See the npm doc
*[package.json](https://npmjs.org/doc/json.html)*
for more information.

---

/controllers folder: Controllers contain all the dummy/skeleton callback functions that routes invoke and passes them to the services. Controllers handle the business logic of the application. The files in this folder are:

`index.js` - Describes the controller files for the project, in this case there is just one, the subscribers.js file.
`subscriberscontroller.js` - Contains all the controllers for the subscribers component of the website.

---

/public folder: Contains all the client facing information for the site.

    /assets folder: Contains the images that are displayed on the site.

`env.js` - Contains the javascript directly related to all of the content on the home page.
`index.html` - Contains the html for the home page.
`styles.css` - Contains the styling information for the content of the home page.

---

/routes folder: Contains all the information for the routes of the web site. A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern. Responsible for serving endpoints to users.

`index.js` - Describes all the route files for the project, in this case there is just one, the subscribers.js file.
`subscribers.js` - Contains all the routes for the subscribers component of the website.

---

/services folder: the services receive the information from the controllers and complete the requests. Services handle the basic CRUD operations.

`index.js` - Describes all the services files for the project, in this case there is just one, the subscribersService.js file.
`subscribersService.js` - Contains all the services relating to the subscribers component of the website.

---

/test folder: this file contains the javascript that performs automated tests on the website. 

`test.js` - This file contains the javascript that runs three tests. One checking that the socket is correctly connecting to the client, and 
two that check if the delete functions of the subscribers service are running correctly.

This file can be operated by first running the website on one terminal as mentioned above with the command:

npm start

and then opening another terminal, navigating to the project folder and running the command:

npm test


---

`README.md`

This file!


I hope you enjoy Julian's Funhouse!
