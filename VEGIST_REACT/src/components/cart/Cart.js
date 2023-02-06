import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    act_handleCartDelete,
    act_handleMinus,
    act_handlePlus,
    act_handleProduct
} from '../../redux/actions'

const Cart = () => {
    const dispatch = useDispatch()
    const cartList = JSON.parse(window.localStorage.getItem('cartList'))
    const lastIndex = cartList?.length - 1
    const [test, setTest] = useState(0)
    const [money, setMoney] = useState(0)
    const insurance = 50
    const transport = 100

    // danh sách sản phẩm
    const elementCart = cartList?.map(item => {
        // lấy dữ liệu của sản phẩm
        const handleProduct = () => {
            dispatch(act_handleProduct(item))
        }

        // xóa sản phẩm
        const handleDelete = () => {
            dispatch(act_handleCartDelete(item))
            setTest(item.id)
        }

        // giảm số lượng sản phẩm
        const handleMinus = (e) => {
            if (item.quantity === 1) {
                e.target.classList.add("disable")
            } else {
                item.quantity--
                e.target.parentElement.querySelector('#inputNumber').value = item.quantity
                e.target.parentElement.querySelector('#plus').classList.remove("disable")
            }
            dispatch(act_handleMinus(item))
            setTest(item)
        }

        // tăng số lượng sản phẩm
        const handlePlus = (e) => {
            if (item.quantity + 1 === item.amount) {
                e.target.classList.add("disable")
            } else {
                item.quantity++
                e.target.parentElement.querySelector('#inputNumber').value = item.quantity
                e.target.parentElement.querySelector('#minus').classList.remove("disable")
            }
            dispatch(act_handlePlus(item))
            setTest(item)
        }

        return (
            <div className="cart-all-pro" key={item.id}>
                <div className="cart-pro">
                    <div className="cart-pro-image">
                        <Link to={'/product'} onClick={handleProduct}>
                            <img
                                src={item.image.map(item => item.imginner1)}
                                className="img-fluid"
                                alt="img"
                                style={{ height: "200px", width: "200px" }}
                            />
                        </Link>
                    </div>
                    <div className="pro-details">
                        <h4>
                            <Link to={'/product'} onClick={handleProduct}>{item.name}</Link>
                        </h4>
                        <span className="pro-shop">{item.vendor}</span>
                        <span className="cart-pro-price">
                            {
                                item.discount > 0 ?
                                    <span className="new-price">${item.newPrice} USD</span>
                                    : item.discount === 0 ?
                                        <span className="new-price">${item.price} USD</span>
                                        : ''
                            }
                            {
                                item.discount > 0 ?
                                    <span className="old-price">
                                        &nbsp;-&nbsp;<del>${item.price} USD</del>
                                    </span>
                                    : ''
                            }
                        </span>
                    </div>
                </div>
                <div className="qty-item">
                    <div className="center">
                        <div className="plus-minus">
                            <span style={{ position: "relative" }}>
                                <a
                                    href="#/"
                                    className="`minus-btn text-black"
                                    onClick={handleMinus}
                                    id="minus"
                                >
                                    -
                                </a>
                                <input
                                    type="text"
                                    name="name"
                                    id='inputNumber'
                                    className='input'
                                    value={item.quantity}
                                    onChange={() => console.log(item.quantity)}
                                />
                                <a
                                    href="#/"
                                    className="plus-btn text-black"
                                    onClick={handlePlus}
                                    id="plus"
                                >
                                    +
                                </a>
                            </span>
                        </div>
                        <a href="#/" onClick={handleDelete} className="pro-remove">
                            Remove
                        </a>
                    </div>
                </div>
                <div className="all-pro-price">
                    {
                        item.discount > 0 ?
                            <span className="new-price">${item.quantity * item.newPrice} USD</span>
                            : item.discount === 0 ?
                                <span className="new-price">${item.quantity * item.price} USD</span>
                                : ''
                    }
                </div>
            </div>
        )
    })

    // cập nhật total
    const handleUpdate = () => {
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
    }

    // xóa toàn bộ sản phẩm
    const handleClear = () => {
        localStorage.removeItem('cartList');
        setTest(1)
    }

    return (
        <div>
            {/* cart start */}
            <section className="cart-page section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-xs-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="cart-area">
                                <div className="cart-details">
                                    <div className="cart-item">
                                        <span className="cart-head">My cart:</span>
                                        <span className="c-items">{lastIndex ? lastIndex + 1 : '0'} item</span>
                                    </div>
                                    {elementCart}
                                    <div className="other-link">
                                        <ul className="c-link">
                                            <li className="cart-other-link">
                                                <a href="#/" onClick={handleUpdate}>Update cart</a>
                                            </li>
                                            <li className="cart-other-link">
                                                <Link to={'/listproducts'}>Continue shopping</Link>
                                            </li>
                                            <li className="cart-other-link">
                                                <a href="#/" onClick={handleClear}>Clear cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="cart-total">
                                <div className="cart-price">
                                    <h5>Hóa Đơn Thanh Toán</h5>
                                </div>
                                <div className="cart-info" style={{ marginTop: "16px", display: "flex", flexDirection: "column" }}>
                                    <div style={{ width: "100%", marginBottom: "10px" }}>
                                        <span style={{ float: "left" }}>Tổng tiền hàng:</span>
                                        <span className="total-amount" style={{ float: "right" }}>${money} USD</span>
                                    </div>
                                    <div style={{ width: "100%", marginBottom: "10px" }}>
                                        <span style={{ float: "left" }}>Phí bảo hiểm:</span>
                                        <span className="total-amount" style={{ float: "right" }}>${insurance} USD</span>
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <span style={{ float: "left" }}>Phí vận chuyển:</span>
                                        <span className="total-amount" style={{ float: "right" }}>${transport} USD</span>
                                    </div>
                                </div>
                                <div className="shop-total">
                                    <span>Tổng thanh toán:</span>
                                    <span className="total-amount">${money + insurance + transport} USD</span>
                                </div>
                                <Link to={'/checkout'} className="check-link">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* cart end */}
        </div>
    )
}

export default Cart