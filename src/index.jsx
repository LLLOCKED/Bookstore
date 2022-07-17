import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import {store} from "./store/store";

import { GlobalStyle } from "./styles";

const rootElement = document.getElementById("root");

if(rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <GlobalStyle/>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
