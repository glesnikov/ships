import React, { Component } from 'react';
import './App.scss';
import ShipList from './components/ShipList/ShipList';
import { ThemeContext } from './ThemeContext';
import ShipAddForm from './components/ShipAddForm/ShipAddForm';

class App extends Component {
    state = {
        items: [
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
        ]
    };

    render() {
        return (
            <div className="app">
                <ThemeContext.Provider value="light">
                    <ShipAddForm onAdd={this.handleAddShip}></ShipAddForm>
                    <ShipList items={this.state.items} />
                </ThemeContext.Provider>
            </div>
        );
    }

    handleAddShip = (name) => {
        this.setState({
            ...this.state,
            items: [
                ...this.state.items,
                { name }
            ]
        });
    }
}

export default App;
