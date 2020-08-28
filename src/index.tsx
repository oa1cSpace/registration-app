import * as React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducers} from "./redux/reducers/rootReducers";
import {render} from "react-dom";

const store = createStore(
    rootReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)
render(
    app,
    document.getElementById('root'),
);

serviceWorker.unregister();