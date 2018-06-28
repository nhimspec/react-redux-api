import * as Types from './../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            state = action.product;

            return state;
        default:
            return state;
    }
};

export default products;