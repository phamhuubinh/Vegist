import * as types from "../actions/index"

const initialState = []
let cartList = []

export const Cart = (state = initialState, action) => {
    let { product } = action
    let newCartList = JSON.parse(window.localStorage.getItem('cartList'))
    switch (action.type) {
        case types.HANDLE_CART:
            const newProduct = {
                id: product.id,
                name: product.name,
                amount: product.amount,
                discount: product.discount,
                image: product.image,
                price: product.price,
                categories: product.categories,
                rating: product.rating,
                vendor: product.vendor,
                newPrice: product.discount > 0 ? product.price - (product.price * product.discount / 100) : '',
                quantity: 1,
                total: product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price
            }
            const checkListCart = newCartList?.findIndex(item => item.id === product.id)
            if (newCartList) {
                if (checkListCart === -1) {
                    cartList = [...newCartList, newProduct]
                    window.localStorage.setItem('cartList', JSON.stringify(cartList))
                } else {
                    console.log("đã có sản phẩm");
                }
            } else {
                window.localStorage.setItem('cartList', JSON.stringify([newProduct]))
            }
            return state;

        case types.HANDLE_CART_DELETE:
            const cartFilter = newCartList.filter(item => item.id !== product.id)
            window.localStorage.setItem('cartList', JSON.stringify(cartFilter))
            return state

        case types.HANDLE_CART_MINUS:
            const newQuantityMinus = {
                ...product,
                quantity: product.quantity,
                total: product.discount > 0 ? product.quantity * product.newPrice : product.quantity * product.price,
            }
            const localQuantityMinus = newCartList?.findIndex(item => item.id === product.id)
            newCartList.splice(localQuantityMinus, 1, newQuantityMinus)
            window.localStorage.setItem('cartList', JSON.stringify(newCartList))
            return state

        case types.HANDLE_CART_PLUS:
            const newQuantityPlus = {
                ...product,
                quantity: product.quantity,
                total: product.discount > 0 ? product.quantity * product.newPrice : product.quantity * product.price,
            }
            const localQuantityPlus = newCartList?.findIndex(item => item.id === product.id)
            newCartList.splice(localQuantityPlus, 1, newQuantityPlus)
            window.localStorage.setItem('cartList', JSON.stringify(newCartList))
            return state

        default:
            return state;
    }
}