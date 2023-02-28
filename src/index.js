// Researched React and Redux, Redux Store and methods
// https://reactjs.org/tutorial/tutorial.html
// https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs
// https://fullstackopen.com/en/part1/introduction_to_react
// https://javascript.plainenglish.io/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6
// https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/
// https://redux.js.org/introduction/getting-started


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // using Provider to ensure all of our reducers are accessible everywhere in our code
  <Provider store = {store}>
    <App />
  </Provider>
);

// Thinking
//   1. This app allows the user to:
//      a. add money to their account
//      b. withdraw money from their account
//      c. add interest to their account - increases by 5% when clicked
//      d. remove interest from their account - decreases by 15%
    