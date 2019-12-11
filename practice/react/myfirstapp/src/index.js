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

// some HTML may be named the same
// function component needs to be capitalized...
// always must return JSX
function About() {
  return (
    <p>This is officially a react function component</p>
  );
}

// props == "react properties"

function H1Generator (props) {
  return (
    <h1>{props.text}</h1>
  );
}

const H2Generator = (props) => {
  return (<h2>{props.something}</h2>); 
}

// class components are better than function components:: car : bicycle
// current class inherits properties and methods from parent class
class Counter extends React.Component {
  constructor() {
    super();
// should not directly access this object, tell the object to chage itself, for security purposes
// review special way to update states for class components
    this.state = {
      score: 0
    };
  }

  // cannot directly access {this.state}
render(props) {
  return (<p>The current score is: {this.props.tempScore}</p>);
}

}

const idOfDiv = "test";

// in b/w parens is JSX


// ANY JS inside of curly braces
// JSX version of createElement 
const app = (
    // to interpolate JS use {}
    <div id={idOfDiv}>
      <About tempScore={3} />
      <H1Generator text="Hi this custom text!" />
      <H1Generator text="This is some other line!" />
      <H2Generator something="Some text" />
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

// JSX syntax
// anything written in JSX should go in b/w a pair of parens
// Any JS inside of JSX should be written b/w a pair of {}
// EXAMPLE:
// let text = (
//   <p>{SomeJSVariable}</p>
// );

// Angular uses typescript...