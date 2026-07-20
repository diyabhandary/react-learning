import React from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App'
createRoot(document.getElementById("root")).render(<App/>) 

//? 2 libraries :
//1. react 
//2. react-dom 

//! createRoot() acts like a bridge (makes a connection) between main.jsx (src folder)
//!  and index.html .

//? render() is used to display the content on UI.