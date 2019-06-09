import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShipListItem from '../ShipListItem/ShipListItem';
import './ShipList.scss';

export default class ShipList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className="ship-list">
                {this.props.items.map((item, key) => (
                    <ShipListItem {...item} key={key} />
                ))}
            </div>
        );
    }
}
