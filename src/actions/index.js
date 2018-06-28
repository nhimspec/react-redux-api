import * as Types from './../constants/ActionTypes';
import callApi from './../utils/ApiCaller';

export const actGetProductsRequest = () => (
    (dispatch) => (
        callApi('products', 'GET').then(res => {
            dispatch(actGetProducts(res));
        })
    )
);

export const actGetProducts = (products) => ({
    type: Types.GET_PRODUCTS,
    products
});

export const actAddProductRequest = (product) => (
    (dispatch) => (
        callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res))
        })
    )
)

export const actAddProduct = (product) => ({
    type: Types.ADD_PRODUCT,
    product
})

export const actDeleteProductRequest = (id) => (
    (dispatch) => (
        callApi(`products/${id}`, 'DELETE').then(res => {
            dispatch(actDeleteProduct(id));
        })
    )
)

export const actDeleteProduct = (id) => ({
    type: Types.DELETE_PRODUCT,
    id
})

export const actGetProductRequest = (id) => (
    (dispatch) => (
        callApi(`products/${id}`, 'GET').then(res => {
            dispatch(actGetProduct(res));
        })
    )
)

export const actGetProduct = (product) => ({
    type: Types.EDIT_PRODUCT,
    product
})


export const actUpdateProductRequest = (product) => (
    (dispatch) => (
        callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(product));
        })
    )
)

export const actUpdateProduct = (product) => ({
    type: Types.UPDATE_PRODUCT,
    product
})