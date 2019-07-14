import { ADD } from './shipConstants';

const initialState = {
    ships: [
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

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD:
            return {
                ...state,
                ships: state.ships.concat(payload)
            };

        default:
            return state;
    }
};
