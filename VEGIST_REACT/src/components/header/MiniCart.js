import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { act_handleCartDelete } from '../../redux/actions'

const MiniCart = () => {
    const dispatch = useDispatch()
    const cartList = JSON.parse(window.localStorage.getItem('cartList'))
    const [test, setTest] = useState(0)
    const [money, setMoney] = useState(0)

    // total
    useEffect(() => {
        const price = []
        cartList?.map(item => {
            price.push(item.total)
            return item
        })
        let sum = 0;
        for (let i = 0; i < price.length; i++) {
            sum += price[i];
        }
        setMoney(sum)
    }, [])

    // danh sách sản phẩm
    const elementCart = cartList?.map(item => {
        // xóa sản phẩm
        const handleDelete = () => {
            dispatch(act_handleCartDelete(item))
            setTest(item.id)
        }

        return (
            <li className="cart-item">
                <div className="cart-img">
                    <a href="product.html">
                        <img
                            src={item.image.map(item => item.imginner1)}
                            alt="cart"
                            className="img-fluid"
                        />
                    </a>
                </div>
                <div className="cart-title">
                    <h6>
                        <a href="product.html">{item.name}</a>
                    </h6>
                    <div className="cart-pro-info">
                        <div className="cart-qty-price">
                            <span className="quantity">1 x</span>
                            &nbsp;
                            <span className="price-box">${item.discount > 0 ? item.newPrice : item.price} USD</span>
                        </div>
                        <div className="delete-item-cart">
                            <a href="#/" onClick={handleDelete}>
                                <i className="icon-trash icons" />
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div>
            <div className="mini-cart">
                <a href="#/" className="shopping-cart-close">
                    <i className="ion-close-round" />
                </a>
                <div className="cart-item-title">
                    <p>
                        <span className="cart-count-desc">There are</span>
                        <span className="cart-count-item bigcounter">4</span>
                        <span className="cart-count-desc">Products</span>
                    </p>
                </div>
                <ul className="cart-item-loop">
                    {elementCart}
                </ul>
                <ul className="subtotal-title-area">
                    <li className="subtotal-info">
                        <div className="subtotal-titles">
                            <h6>Sub total:</h6>
                            <span className="subtotal-price">${money} USD</span>
                        </div>
                    </li>
                    <li className="mini-cart-btns">
                        <div className="cart-btns">
                            <Link to={'/view-cart'} className="btn btn-style2">
                                View cart
                            </Link>
                            <Link to={'/checkout'} className="btn btn-style2">
                                checkout
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MiniCart