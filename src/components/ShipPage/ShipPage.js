import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ShipForm from '../ShipForm/ShipForm';
import ShipList from '../ShipList/ShipList';
import { addShip } from '../../store/ship/shipActions';
import { connect } from 'react-redux';

class ShipPage extends Component {
    static propTypes = {
        ships: PropTypes.array,
        addShip: PropTypes.func.isRequired
    };

    render() {
        const { ships } = this.props;

        return (
            <div>
                <ShipList items={ships} />
                <ShipForm onSave={this.handleSave} />
            </div>
        );
    }

    handleSave = ship => this.props.addShip(ship);
}

export default connect(
    state => ({
        ships: state.ships
    }),
    dispatch => ({
        addShip: ship => dispatch(addShip(ship))
    })
)(ShipPage);
