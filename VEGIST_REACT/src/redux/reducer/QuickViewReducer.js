import * as types from '../actions/index'

const initialState = []

export const QuickView = (state = initialState, action) => {
    let { product } = action
    switch (action.type) {
        case types.QUICKVIEW_PRODUCT:
            state = product
            return state;

        default:
            return state;
    }
}