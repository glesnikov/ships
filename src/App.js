import React, { Component } from 'react';
import './App.scss';
import ShipList from './components/ShipList/ShipList';
import { ThemeContext } from './ThemeContext';

class App extends Component {
    render() {
        const items = [
            {
                name: 'CE-23V'
            },
            {
                name: 'FF2'
            },
            {
                name: 'XEN-Z1'
            },
            {
                name: 'APPOLO-5'
            },
            {
                name: 'ANDROMEDA-CC2'
            }
        ];
        return (
            <div className="app">
                <ThemeContext.Provider value="light">
                    <ShipList items={items} />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
