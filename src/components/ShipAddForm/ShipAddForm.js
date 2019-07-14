import React, { Component } from 'react';
import styles from './ShipListForm.module.scss';

export default class ShipAddForm extends Component {
    state = {
        name: ''
    };

    render() {
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        className={styles.input}
                        value={this.state.name}
                        type="text"
                        ref="name"
                    />
                    <button
                        className={styles.submit}
                        type="submit"
                        disabled={!this.state.name.length}
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }

    handleChange = evt => {
        this.setState({
            name: evt.target.value
        });
    };

    handleSubmit = evt => {
        this.setState({
            name: ''
        });
        evt.preventDefault();
        this.props.onAdd(this.refs.name.value);
    };
}
