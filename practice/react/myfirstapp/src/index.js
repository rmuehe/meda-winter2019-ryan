// import vs require
// import is faster than require
// import allows to specifically pull out parts of a library

import React from 'react';
import ReactDOM from 'react-dom';

// Need to build a component to hold these components
// aka COMPOSITION

// component building :JS code that deals with HTML
// create our first componenet, barebones.
// first argument is name of elemtn, second argument is attributes, third is content of element.
const title = React.createElement(
    "h1",
    /* this is for attributes */
    {
        id: "top"
    },
    "Hello World!"
);

// ex of stateless component
let someTitle = "Welcome to my React website";
const paragraph = React.createElement(
    "p",
    null,
    "This is a paragraph"
);

const idOfDiv = "test";

// in b/w parens is JSX

// JSX version of createElement 
const app = (
    // to interpolate JS use {}
    <div id={idOfDiv}>
      <h1>{someTitle}</h1>  
      <p>{title}</p>
      {paragraph}
      <ul>
        <li>list item</li>
      </ul>
    </div>
  );

const footer2 = React.createElement(
    "div",
    {id: "footer"}
);



// render(): "please put this on the webpage"
// render will take one component or composition
// Render componenet to target element
ReactDOM.render(
    app,
    document.getElementById("root")
);