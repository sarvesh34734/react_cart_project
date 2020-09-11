import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyyRlk9OkaiXyIfU-yfEZxxaBQvnMqRLA",
  authDomain: "cart-e47ca.firebaseapp.com",
  databaseURL: "https://cart-e47ca.firebaseio.com",
  projectId: "cart-e47ca",
  storageBucket: "cart-e47ca.appspot.com",
  messagingSenderId: "3570926035",
  appId: "1:3570926035:web:dbf8626315ab698ff02f26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

