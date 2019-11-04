import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const divRoot = document.getElementById("root");
    // const store =  configureStore();
    
    ReactDOM.render(<h1>Friends right here</h1> , divRoot);
})

    // < Root store = { store } />