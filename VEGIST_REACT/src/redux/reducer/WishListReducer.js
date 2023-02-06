import * as types from '../actions/index'
import axiosUser from '../../api/vegist'

const initialState = []

export const WishList = (state = initialState, action) => {
    let { product } = action
    const user = JSON.parse(window.localStorage.getItem('user'))
    switch (action.type) {
        case types.HANDLE_WISHLIST:
            const checkWishList = user.wishList.findIndex(item => item.id === product.id)
            if (checkWishList === -1) {
                const wishList = [...user.wishList, product]
                const newUser = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    firstAddress: user.firstAddress,
                    secondAddress: user.secondAddress,
                    city: user.city,
                    state: user.state,
                    pinCode: user.pinCode,
                    country: user.country,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    password: user.password,
                    id: user.id,
                    cart: user.cart,
                    wishList: wishList
                }
                window.localStorage.setItem('user', JSON.stringify(newUser))
                axiosUser.put('users/' + user.id, newUser)
            } else {
                console.log("đã có sản phẩm");
            }
            return state;

        case types.HANDLE_WISHLIST_DELETE:
            const wishListFilter = user.wishList.filter(item => item.id !== product.id)
            const newUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                firstAddress: user.firstAddress,
                secondAddress: user.secondAddress,
                city: user.city,
                state: user.state,
                pinCode: user.pinCode,
                country: user.country,
                phoneNumber: user.phoneNumber,
                email: user.email,
                password: user.password,
                id: user.id,
                cart: user.cart,
                wishList: wishListFilter
            }
            window.localStorage.setItem('user', JSON.stringify(newUser))
            axiosUser.put('users/' + user.id, newUser)
            return state

        default:
            return state;
    }
}