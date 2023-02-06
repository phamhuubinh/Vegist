import * as types from '../actions/index'

const initialState = []

export const ListProducts = (state = initialState, action) => {
    let { products, product } = action
    switch (action.type) {
        case types.LIST_PRODUCTS:
            state = products
            return state;

        case types.LIST_PRODUCTS_FILTER:
            state = products
            return state;

        case types.LIST_PRODUCTS_FILTER_PRICE:
            state = products
            return state;

        case types.LIST_PRODUCTS_FILTER_NAME:
            state = products
            return state;

        case types.LIST_PRODUCTS_FILTER_VENDOR:
            state = products
            return state;

        case types.SORT_PRODUCTS:
            const newSort = [...products]
            return newSort;

        case types.HANDLE_PRODUCT:
            window.localStorage.setItem('product', JSON.stringify(product))
            return state;

        default:
            return state;
    }
}