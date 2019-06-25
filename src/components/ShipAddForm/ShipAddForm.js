import React, { Component } from 'react';
import styles from './ShipListForm.module.scss';

export default class ShipAddForm extends Component {
    render() {
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <input className={styles.input} type="text" ref="name"/>
                    <button className={styles.submit} type="submit">Add</button>
                </form>
            </div>
        )
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.refs.name.value);
    }
}
