import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <div className="navbar-collapse" id="navbarContent">
                <div className="megamenu-content">
                    <div className="mainwrap">
                        <ul className="main-menu">
                            <li className="menu-link parent">
                                <Link to={'/'} className='link-title'>
                                    <span className="sp-link-title">Home</span>
                                </Link>
                            </li>
                            <li className="menu-link parent">
                                <a href="#/" className="link-title">
                                    <span className="sp-link-title">Shop</span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <a
                                    href="#collapse-mega-menu"
                                    data-bs-toggle="collapse"
                                    className="link-title link-title-lg"
                                >
                                    <span className="sp-link-title">Shop</span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <ul
                                    className="dropdown-submenu mega-menu collapse"
                                    id="collapse-mega-menu"
                                >
                                    <li className="megamenu-li parent">
                                        <h2 className="sublink-title">Fresh food</h2>
                                        <a
                                            href="#collapse-sub-mega-menu"
                                            data-bs-toggle="collapse"
                                            className="sublink-title sublink-title-lg"
                                        >
                                            <span>Fresh food</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="dropdown-supmenu collapse"
                                            id="collapse-sub-mega-menu"
                                        >
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Fruit &amp; nut</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Snack food</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>
                                                    Organics nut gifts
                                                </Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Non-dairy</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Mayonnaise</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Milk almond</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="megamenu-li parent">
                                        <h2 className="sublink-title">Mixedfruits</h2>
                                        <a
                                            href="#collapse-fruits-menu"
                                            data-bs-toggle="collapse"
                                            className="sublink-title sublink-title-lg"
                                        >
                                            <span>Mixedfruits</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="dropdown-supmenu collapse"
                                            id="collapse-fruits-menu"
                                        >
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Oranges</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Coffee creamers</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Ghee beverages</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Ranch salad</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Hemp milk</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Nuts &amp; seeds</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="megamenu-li parent">
                                        <h2 className="sublink-title">
                                            Bananas &amp; plantains
                                        </h2>
                                        <a
                                            href="#collapse-banana-menu"
                                            data-bs-toggle="collapse"
                                            className="sublink-title sublink-title-lg"
                                        >
                                            <span>Bananas &amp; plantains</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="dropdown-supmenu collapse"
                                            id="collapse-banana-menu"
                                        >
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Fresh gala</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Fresh berries</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Fruit &amp; nut</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>
                                                    Fifts mixed fruits
                                                </Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Oranges</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Oranges</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="megamenu-li parent">
                                        <h2 className="sublink-title">
                                            Apples berries
                                        </h2>
                                        <a
                                            href="#collapse-apple-menu"
                                            data-bs-toggle="collapse"
                                            className="sublink-title sublink-title-lg"
                                        >
                                            <span>Apples berries</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="dropdown-supmenu collapse"
                                            id="collapse-apple-menu"
                                        >
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Pears produce</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Bananas</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>Natural grassbeab</Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>
                                                    Fresh green orange
                                                </Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>
                                                    Fresh organic reachter
                                                </Link>
                                            </li>
                                            <li className="supmenu-li">
                                                <Link to={"/product"}>
                                                    Balckberry 100%organic
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-link parent">
                                <a href='#/' className="link-title">
                                    <span className="sp-link-title">Collection</span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <a
                                    href="#collapse-banner-menu"
                                    data-bs-toggle="collapse"
                                    className="link-title link-title-lg"
                                >
                                    <span className="sp-link-title">Collection</span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <ul
                                    className="dropdown-submenu banner-menu collapse"
                                    id="collapse-banner-menu"
                                >
                                    <li className="menu-banner">
                                        <Link
                                            to={"/listproducts"}
                                            className="menu-banner-img"
                                        >
                                            <img
                                                src="image/menu-banner01.jpg"
                                                alt="menu"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <Link
                                            to={"/listproducts"}
                                            className="menu-banner-title"
                                        >
                                            <span>Bestseller</span>
                                        </Link>
                                    </li>
                                    <li className="menu-banner">
                                        <Link
                                            to={"/listproducts"}
                                            className="menu-banner-img"
                                        >
                                            <img
                                                src="image/menu-banner02.jpg"
                                                alt="menu"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <Link
                                            to={"/listproducts"}
                                            className="menu-banner-title"
                                        >
                                            <span>Special product</span>
                                        </Link>
                                    </li>
                                    <li className="menu-banner">
                                        <Link
                                            to={"/listproducts"}
                                            className="menu-banner-img"
                                        >
                                            <img
                                                src="image/menu-banner03.jpg"
                                                alt="menu"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <Link
                                            to={"/listproducts"}
                                            className="menu-banner-title"
                                        >
                                            <span>Featured product</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-link parent">
                                <a href="#/" className="link-title">
                                    <span className="sp-link-title">Pages</span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <a
                                    href="#collapse-page-menu"
                                    data-bs-toggle="collapse"
                                    className="link-title link-title-lg"
                                >
                                    <span className="sp-link-title">Pages</span>
                                    <i className="fa fa-angle-down" />
                                </a>
                                <ul
                                    className="dropdown-submenu sub-menu collapse"
                                    id="collapse-page-menu"
                                >
                                    <li className="submenu-li">
                                        <Link
                                            to={'/aboutus'}
                                            className="submenu-link"
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="submenu-li">
                                        <Link
                                            to={'/billing'}
                                            className="submenu-link"
                                        >
                                            Billing info
                                        </Link>
                                    </li>
                                    <li className="submenu-li">
                                        <Link to={'/questions'} className="submenu-link">
                                            Faq's
                                        </Link>
                                    </li>
                                    <li className="submenu-li">
                                        <Link to={'/contact'} className="submenu-link">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className="submenu-li">
                                        <Link
                                            to={'/terms-conditions'}
                                            className="submenu-link"
                                        >
                                            Terms &amp; conditions
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-link parent">
                                <Link to={'/blogs'} className="link-title">
                                    <span className="sp-link-title">Blogs</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu