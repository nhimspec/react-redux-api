import * as Types from './../constants/ActionTypes';
import _ from 'lodash';

var initialState = [];

const products = (state = initialState, action) => {
    var index = -1;
    let { id, product } = action;
    switch (action.type) {
        case Types.GET_PRODUCTS:
            state = action.products;

            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);

            return [...state];
        case Types.DELETE_PRODUCT:
            index = _.findIndex(state, (item) => item.id === id);
            state.splice(index, 1);

            return [...state];
        case Types.UPDATE_PRODUCT:
            index = _.findIndex(state, (item) => item.id === product.id);
            state[index] = product;
            return [...state];
        default:
            return [...state];
    }
};

export default products;