export const CREATE_USER = "CREATE_USER"
export const LOGIN_USER = "LOGIN_USER"
// create user
export const act_createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    }
}
// login
export const act_loginUser = (checkUser) => {
    return {
        type: LOGIN_USER,
        checkUser
    }
}


export const LIST_PRODUCTS = "LIST_PRODUCTS"
export const LIST_PRODUCTS_FILTER = "LIST_PRODUCTS_FILTER"
export const LIST_PRODUCTS_FILTER_PRICE = "LIST_PRODUCTS_FILTER_PRICE"
export const LIST_PRODUCTS_FILTER_NAME = "LIST_PRODUCTS_FILTER_NAME"
export const LIST_PRODUCTS_FILTER_VENDOR = "LIST_PRODUCTS_FILTER_VENDOR"
export const SORT_PRODUCTS = "SORT_PRODUCTS"
export const HANDLE_PRODUCT = "HANDLE_PRODUCT"
// listproducts
export const act_listProducts = (products) => {
    return {
        type: LIST_PRODUCTS,
        products
    }
}
// listproducts filter
export const act_listProductsFilter = (products) => {
    return {
        type: LIST_PRODUCTS_FILTER,
        products
    }
}
// listproducts filter price
export const act_listProductsFilterPrice = (products) => {
    return {
        type: LIST_PRODUCTS_FILTER_PRICE,
        products
    }
}
// listproducts filter name
export const act_listProductsFilterName = (products) => {
    return {
        type: LIST_PRODUCTS_FILTER_NAME,
        products
    }
}
// listproducts filter vendor
export const act_listProductsFilterVendor = (products) => {
    return {
        type: LIST_PRODUCTS_FILTER_VENDOR,
        products
    }
}
// sort products
export const act_sortProducts = (products) => {
    return {
        type: SORT_PRODUCTS,
        products
    }
}
// handleproduct
export const act_handleProduct = (product) => {
    return {
        type: HANDLE_PRODUCT,
        product
    }
}


export const QUICKVIEW_PRODUCT = "QUICKVIEW_PRODUCT"
// quickview product
export const act_quickViewProduct = (product) => {
    return {
        type: QUICKVIEW_PRODUCT,
        product
    }
}


export const HANDLE_WISHLIST = "HANDLE_WISHLIST"
export const HANDLE_WISHLIST_DELETE = "HANDLE_WISHLIST_DELETE"
// handlewishlist
export const act_handleWishList = (product) => {
    return {
        type: HANDLE_WISHLIST,
        product
    }
}
export const act_handleWishListDelete = (product) => {
    return {
        type: HANDLE_WISHLIST_DELETE,
        product
    }
}


export const HANDLE_CART = "HANDLE_CART"
export const HANDLE_CART_DELETE = "HANDLE_CART_DELETE"
export const HANDLE_CART_MINUS = "HANDLE_CART_MINUS"
export const HANDLE_CART_PLUS = "HANDLE_CART_PLUS"
// handlecart
export const act_handleCart = (product) => {
    return {
        type: HANDLE_CART,
        product
    }
}
// handlecartdelete
export const act_handleCartDelete = (product) => {
    return {
        type: HANDLE_CART_DELETE,
        product
    }
}
// handleminus
export const act_handleMinus = (product) => {
    return {
        type: HANDLE_CART_MINUS,
        product
    }
}
// handleplus
export const act_handlePlus = (product) => {
    return {
        type: HANDLE_CART_PLUS,
        product
    }
}