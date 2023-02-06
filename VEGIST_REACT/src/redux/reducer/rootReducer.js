import { combineReducers } from 'redux';
import { Users } from './UsersReducer';
import { ListProducts } from './ListProductsReducer';
import { QuickView } from './QuickViewReducer';
import { WishList } from './WishListReducer';
import { Cart } from './CartReducer';

const RootReducer = combineReducers({
    Users,
    ListProducts,
    QuickView,
    WishList,
    Cart,
})

export default RootReducer