import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShipListItem from '../ShipListItem/ShipListItem';
import './ShipList.scss';
import ShipAddForm from '../ShipAddForm/ShipAddForm';

export default class ShipList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <ShipAddForm></ShipAddForm>
                <div className="ship-list">
                    {this.props.items.map((item, key) => (
                        <ShipListItem {...item} key={key} />
                    ))}
                </div>
            </div>
            
        );
    }
}
