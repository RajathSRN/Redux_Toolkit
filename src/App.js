import React from 'react';
import {Contacts} from "./components";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Contacts/>
            </div>
        </Provider>
    );
}

export default App;