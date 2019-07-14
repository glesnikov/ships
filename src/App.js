import React, { Component } from 'react';

import { Provider } from 'react-redux';
import ShipPage from './components/ShipPage/ShipPage';
import { createStore } from 'redux';
import shipReducer from './store/ship/shipReducer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ShipPage />
            </Provider>
        );
    }
}

const store = createStore(
    shipReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default App;
