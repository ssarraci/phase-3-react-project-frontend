# Getting Started 
First go into the backend and in the terminal type in "bundle install" then "bundle exec rake server" to start the backend server. After that go to the frontend and in the terminal type in "npm install" then "npm start" to be able to see the code in the browser.

# What This App Is About
This app was to focus on creating a backend using Ruby. All the frontend code was created using React was designed to interact with the API to perform CRUD actions. In the backend we used Active Record to interact with a database. We also used 2 models that had a one-to-many relationship, the one creator to many games. There are API routes in Sinatra that handles CRUD actions for one of the Active Records models.The models showcase a OO design pattern, meaning that there are separate classes for each of the models and the instance and class methods were created as necessary.

# Navigation
In the browser you will only see one page, the frontend was kept simple. In this you will see the list of games currently created and the details that go with them. They also have a delete button that you can use to delete the button if you choose to. At the end of the page you have a form where you can create a new game.

