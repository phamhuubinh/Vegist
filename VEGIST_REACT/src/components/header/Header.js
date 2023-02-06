import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import MiniCart from './MiniCart'

const Header = () => {
    // lấy số lượng sản phẩm đã thích
    const user = JSON.parse(window.localStorage.getItem('user'))
    const wishList = user?.wishList
    const cartList = JSON.parse(window.localStorage.getItem('cartList'))

    return (
        <div>
            {/* header start */}
            <header className="header-area">
                <div className="header-main-area">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header-main">
                                    {/* logo start */}
                                    <div className="header-element logo">
                                        <a href='/#'>
                                            <img
                                                src="image/logo1.png"
                                                alt="logo"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                    {/* logo end */}
                                    {/* search start */}
                                    <div className="header-element search-wrap"></div>
                                    {/* search end */}
                                    {/* header-icon start */}
                                    <div className="header-element right-block-box">
                                        <ul className="shop-element">
                                            <li className="side-wrap nav-toggler">
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#navbarContent"
                                                >
                                                    <span className="line" />
                                                </button>
                                            </li>
                                            <li className="side-wrap user-wrap">
                                                <div className="acc-desk">
                                                    <div className="user-icon">
                                                        <Link to={'/account'} className="user-icon-desk">
                                                            <span>
                                                                <i className="icon-user" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="acc-title">Account</span>
                                                        <div className="account-login">
                                                            <Link to={'/register'}>Register</Link>
                                                            <Link to={'/login'}>Log in</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="acc-mob">
                                                    <Link to={'/account'} className="user-icon">
                                                        <span>
                                                            <i className="icon-user" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="side-wrap wishlist-wrap">
                                                <Link to={'/wishlist'} className="header-wishlist">
                                                    <span className="wishlist-icon">
                                                        <i className="icon-heart" />
                                                    </span>
                                                    <span className="wishlist-counter">{wishList ? wishList.length : '0'}</span>
                                                </Link>
                                            </li>
                                            <li className="side-wrap cart-wrap">
                                                <div className="shopping-widget">
                                                    <div className="shopping-cart">
                                                        <a href="#/" className="cart-count">
                                                            <span className="cart-icon-wrap">
                                                                <span className="cart-icon">
                                                                    <i className="icon-handbag" />
                                                                </span>
                                                                <span id="cart-total" className="bigcounter">
                                                                    {cartList ? cartList.length : '0'}
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* header-icon end */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom-area">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="main-menu-area">
                                        <div className="main-navigation navbar-expand-xl">
                                            <div className="box-header menu-close">
                                                <button className="close-box" type="button">
                                                    <i className="ion-close-round" />
                                                </button>
                                            </div>
                                            {/* menu start */}
                                            <Menu />
                                            {/* menu end */}
                                            <div className="img-hotline">
                                                <div className="image-line">
                                                    <a href="/#">
                                                        <img
                                                            src="image/icon_contact.png"
                                                            className="img-fluid"
                                                            alt="icon"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="image-content">
                                                    <span className="hot-l">Hotline:</span>
                                                    <span>0969 609 003</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*mini Cart start*/}
                <MiniCart />
                {/*mini Cart end*/}
            </header>
            {/* header end */}
        </div>
    )
}

export default Header