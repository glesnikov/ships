import './ShipListItem.scss';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class ShipListItem extends Component {
    static propTypes = {
        name: PropTypes.string,
        capacity: PropTypes.number
    };

    static defaultProps = {
        capacity: 100
    };

    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <div className="ship-list-item" onClick={this.handleClick}>
                <div>
                    <strong>Name: </strong>
                    {this.props.name}
                </div>
                <div>
                    <strong>Capacity: </strong>
                    {this.props.capacity} + {this.state.counter}
                </div>
            </div>
        );
    }
}
