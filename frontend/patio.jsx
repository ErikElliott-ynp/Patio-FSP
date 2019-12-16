import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
    const divRoot = document.getElementById("root");
    let store;
    store =  configureStore();
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    if (process.env.NODE_ENV !== "production"){
        window.getState = store.getState;
        
    }
    ReactDOM.render(<Root store={store} /> , divRoot);
})


document.addEventListener("click", (e) => {
    const divs = ["friend-box", "msg-box", "note-box"];
    if (!pathChecker(e, divs) && (!(e.target.classList.contains('white')))) {
        let dropdowns = document.getElementsByClassName('down');
        for (let i = 0; i < dropdowns.length; i++) {
            let open = dropdowns[i];
            if (!open.classList.contains('hidden')){
                open.classList.add('hidden')
            }
        }
        let icons = document.getElementsByClassName('gray');
        for (let i = 0; i < icons.length; i++) {
            let white = icons[i];
            if (white.classList.contains("white")) {
                white.classList.remove("white");
            }
        }
    }
})

const pathChecker = (e, ids) => {
    let check = false;
    for (let i = 0; i < e.path.length; i++) {
        if (ids.includes(e.path[i].id)) check = true;
        if (e.path[i].nodeName === 'A') return false
    }
    return check;
}
