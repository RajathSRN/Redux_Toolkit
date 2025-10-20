import React from 'react';
import {Contacts, NavBar} from "./components";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <NavBar/>
                <Contacts/>
            </div>
        </Provider>
    );
}

export default App;