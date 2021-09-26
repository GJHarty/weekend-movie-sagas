# Movie Sagas

You can use this application to keep track of movies including their name, a poster image via google, and a description. All movie's are editable and you can search for an individual movie on the home page. This was created using React, Material-UI, Node.js and Postgres.

## Setup

Simply clone the respository and install the node modules. This is a React app so you will have to run the server and client seperately
```
npm install
npm run server
npm run client
```
You will also have to setup a postgres database using the data listed in the database.sql file in the main directory.


## Usage
On the home screen a list of movies will be populated. 

<a href="https://imgur.com/h5S1S9U"><img src="https://i.imgur.com/h5S1S9U.png" title="source: imgur.com" /></a>

Each movie can be clicked in order to be brought to that movies description page. There is also a search function which uses Material-UI's autocomplete. 

<a href="https://imgur.com/9O3wjfM"><img src="https://i.imgur.com/9O3wjfM.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/WeGNQT2"><img src="https://i.imgur.com/WeGNQT2.png" title="source: imgur.com" /></a>


On the movie description page the user can go back to home page or click the edit button to be brought to the edit page. Here the user can change the title or description of that movie.

<a href="https://imgur.com/YmSg14x"><img src="https://i.imgur.com/YmSg14x.png" title="source: imgur.com" /></a>

Finally, the user can choose to add a new movie to the database. They just need to enter the Title, a link to a movie poster or image, and select a genre. Once the user hits save the movie will be added to the database and they will be brought back to the home page.

<a href="https://imgur.com/TUcIs7J"><img src="https://i.imgur.com/TUcIs7J.png" title="source: imgur.com" /></a>







