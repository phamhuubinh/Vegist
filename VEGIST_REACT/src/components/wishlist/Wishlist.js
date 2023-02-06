import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { act_handleCart, act_handleProduct, act_handleWishListDelete } from '../../redux/actions'

const Wishlist = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(window.localStorage.getItem('user'))
    const wishList = user?.wishList

    // danh sách sản phẩm yêu thích
    const elementWishList = wishList?.map(item => {
        // lấy dữ liệu sản phẩm
        const handleProduct = () => {
            dispatch(act_handleProduct(item))
            navigate('/product')
        }

        // xóa sản phẩm
        const handleDelete = () => {
            dispatch(act_handleWishListDelete(item))
        }

        // sản phẩm muốn mua
        const handleCart = () => {
            dispatch(act_handleCart(item))
            navigate('/view-cart')
        }

        return (
            <div className="wishlist-all-pro" key={item.id}>
                <div className="wishlist-pro">
                    <div className="wishlist-pro-image">
                        <Link to={'/product'} onClick={handleProduct}>
                            <img
                                src={item.image.map(item => item.imginner2)}
                                className="img-fluid"
                                alt="img"
                                style={{ height: "200px", width: "200px" }}
                            />
                        </Link>
                    </div>
                    <div className="pro-details">
                        <h4>
                            <a href="#/" onClick={handleProduct}>{item.name}</a>
                        </h4>
                        <span className="wishlist-text">{item.vendor}</span>
                    </div>
                </div>
                <div className="qty-item">
                    <a href="#/" onClick={handleCart} className="add-wishlist">
                        Add to cart
                    </a>
                    <a href="#/" onClick={handleDelete} className="add-wishlist">
                        Delete
                    </a>
                </div>
                <div className="all-pro-price">
                    {
                        item.discount > 0 ?
                            <span className="new-price">${item.price - (item.price * item.discount / 100)} USD</span>
                            : item.discount === 0 ?
                                <span className="new-price">${item.price}.00 USD</span>
                                : ''
                    }
                    {
                        item.discount > 0 ?
                            <span className="old-price">
                                <del>${item.price} USD</del>
                            </span>
                            : ''
                    }
                </div>
            </div>
        )
    })

    return (
        <div>
            {/* wishlist start */}
            <section className="wishlist-page section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="wishlist-area">
                                <div className="wishlist-details">
                                    <div className="wishlist-item">
                                        <span className="wishlist-head">My wishlist:</span>
                                        <span className="wishlist-items">{wishList ? wishList.length : '0'} item</span>
                                    </div>
                                    {elementWishList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* wishlist end */}
        </div>
    )
}

export default Wishlist