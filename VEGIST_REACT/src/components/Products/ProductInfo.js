import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { act_handleCart, act_handleWishList } from '../../redux/actions'

const ProductInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [imgInner1, setImgInner1] = useState('')
    const [imgZoom1, setImgZoom1] = useState('')
    const [imgInner2, setImgInner2] = useState('')
    const [imgZoom2, setImgZoom2] = useState('')
    const product = JSON.parse(window.localStorage.getItem('product'))

    // lấy ảnh từ localStorage
    useEffect(() => {
        product?.image.map(item => {
            setImgInner1(item.imginner1)
            setImgInner2(item.imginner2)
            setImgZoom1(item.imgzoom1)
            setImgZoom2(item.imgzoom2)
            return item
        })
    }, [product])

    // sản phẩm yêu thích
    const handleWishList = () => {
        dispatch(act_handleWishList(product))
        navigate('/wishlist')
    }

    // sản phẩm muốn mua
    const handleCart = () => {
        dispatch(act_handleCart(product))
        navigate('/view-cart')
    }

    return (
        <div>
            <section className="section-tb-padding pro-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-xs-12 pro-image">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 larg-image">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="image-11">
                                            <a href="/#" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            `url(${imgZoom1})`
                                                    }}
                                                >
                                                    <img
                                                        src={imgZoom1}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-22">
                                            <a href="/#" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            `url(${imgZoom2})`
                                                    }}
                                                >
                                                    <img
                                                        src={imgZoom2}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs pro-page-slider owl-carousel owl-theme">
                                        <li className="nav-item items">
                                            <a
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                href="#image-11"
                                            >
                                                <img
                                                    src={imgInner1}
                                                    className="img-fluid"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-22">
                                                <img
                                                    src={imgInner2}
                                                    className="img-fluid"
                                                    alt="iamge"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 pro-info">
                                    <h4>{product.name}</h4>
                                    <div className="rating">
                                        {[...Array(product.rating)].map((e, i) => <i className="fa fa-star d-star" key={i} />)}
                                        {[...Array(5 - product.rating)].map((e, i) => <i className="fa fa-star-o" key={i} />)}
                                    </div>
                                    <div className="pro-availabale">
                                        <span className="available">Availability:</span>
                                        <span className="pro-instock">{product.amount > 0 ? 'In stock' : 'Out of stock'}</span>
                                    </div>
                                    <div className="pro-price">
                                        {
                                            product.discount > 0 ?
                                                <span className="new-price">${product.price - (product.price * product.discount / 100)} USD</span>
                                                : product.discount === 0 ?
                                                    <span className="new-price">${product.price}.00 USD</span>
                                                    : ''
                                        }
                                        {
                                            product.discount > 0 ?
                                                <span className="old-price">
                                                    <del>${product.price} USD</del>
                                                </span>
                                                : ''
                                        }
                                        <div className="Pro-lable">
                                            {
                                                product.discount > 0 ?
                                                    <span className="p-discount">-{product.discount}%</span>
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                    <span className="pro-details">
                                        Hurry up! only <span className="pro-number">{product.amount}</span> products
                                        left in stock!
                                    </span>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and
                                    </p>
                                    <div className="pro-items">
                                        <span className="pro-size">Size:</span>
                                        <ul className="pro-wight">
                                            <li>
                                                <a href="/#" className="active">
                                                    5KG
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">2KG</a>
                                            </li>
                                            <li>
                                                <a href="/#">3KG</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pro-qty">
                                        <span className="qty">Quantity:</span>
                                        <div className="plus-minus">
                                            <span>
                                                <a
                                                    href="/#"
                                                    className="minus-btn text-black"
                                                >
                                                    -
                                                </a>
                                                <input type="text" name="name" defaultValue={1} />
                                                <a
                                                    href="/#"
                                                    className="plus-btn text-black"
                                                >
                                                    +
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pro-btn">
                                        <a href="#/" onClick={handleWishList} className="btn btn-style1">
                                            <i className="fa fa-heart" />
                                        </a>
                                        <a href="#/" onClick={handleCart} className="btn btn-style1">
                                            <i className="fa fa-shopping-bag" /> Add to cart
                                        </a>
                                        <Link to={'/checkout'} className="btn btn-style1">
                                            Buy now
                                        </Link>
                                    </div>
                                    <div className="share">
                                        <span className="share-lable">Share:</span>
                                        <ul className="share-icn">
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-pinterest" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pay-img">
                                        <a href="checkout-1.html">
                                            <img
                                                src="image/pay-image.jpg"
                                                className="img-fluid"
                                                alt="pay"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-md-12 col-xs-12 pro-shipping">
                            <div className="product-service">
                                <div className="icon-title">
                                    <span>
                                        <i className="ti-truck" />
                                    </span>
                                    <h4>Delivery info</h4>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    the printing and typesetting industry.
                                </p>
                            </div>
                            <div className="product-service">
                                <div className="icon-title">
                                    <span>
                                        <i className="ti-reload" />
                                    </span>
                                    <h4>30 days returns</h4>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductInfo