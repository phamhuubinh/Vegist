import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <section className="footer-one section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-service section-b-padding">
                                <ul className="service-ul">
                                    <li className="service-li">
                                        <a href="/#">
                                            <i className="fa fa-truck" />
                                        </a>
                                        <span>Free delivery</span>
                                    </li>
                                    <li className="service-li">
                                        <a href="/#">
                                            <i className="fa fa-rupee" />
                                        </a>
                                        <span>Cash on delivery</span>
                                    </li>
                                    <li className="service-li">
                                        <a href="/#">
                                            <i className="fa fa-refresh" />
                                        </a>
                                        <span>30 Days returns</span>
                                    </li>
                                    <li className="service-li">
                                        <a href="/#">
                                            <i className="fa fa-headphones" />
                                        </a>
                                        <span>Online support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="f-logo">
                                <ul className="footer-ul">
                                    <li className="footer-li footer-logo">
                                        <a href="index.html">
                                            <img className="img-fluid" src="image/logo1.png" alt="" />
                                        </a>
                                    </li>
                                    <li className="footer-li footer-address">
                                        <ul className="f-ul-li-ul">
                                            <li className="footer-icon">
                                                <i className="ion-ios-location" />
                                            </li>
                                            <li className="footer-info">
                                                <h6>Address</h6>
                                                <span>6th floor, RITM Building</span>
                                                <span>25, Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer-li footer-contact">
                                        <ul className="f-ul-li-ul">
                                            <li className="footer-icon">
                                                <i className="ion-ios-telephone" />
                                            </li>
                                            <li className="footer-info">
                                                <h6>Contact</h6>
                                                <a href="tel:1-800-222-000">Phone: 0969 609 003</a>
                                                <a href="mailto:demo@demo.com">
                                                    Email: devmaster.contact@gmail.com
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer-li footer-address">
                                        <ul className="f-ul-li-ul">
                                            <li className="footer-icon">
                                                <i className="ion-ios-help" />
                                            </li>
                                            <li className="footer-info">
                                                <h6>Help</h6>
                                                <span>Lorem ipsum is simply</span>
                                                <span>Dummy the printing</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-bottom section-t-padding">
                                <div className="footer-link" id="footer-accordian">
                                    <div className="f-link">
                                        <h2 className="h-footer">Top categories</h2>
                                        <a
                                            href="#t-cate"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>Top categories</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="t-cate"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <Link to={'/listproducts'}>Fruits</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/listproducts'}>Fast foods</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/listproducts'}>Vegetable</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/listproducts'}>Salads</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/listproducts'}>Bestseller</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="f-link">
                                        <h2 className="h-footer">Services</h2>
                                        <a
                                            href="#services"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>Services</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="services"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <Link to={'/aboutus'}>About vegist</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/questions'}>Faq's</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/contact'}>Contact us</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/blogs'}>News</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/'}>Sitemap</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="f-link">
                                        <h2 className="h-footer">Privacy &amp; terms</h2>
                                        <a
                                            href="#privacy"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>Privacy &amp; terms</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="privacy"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <Link to={'/payment'}>Payment policy</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/privacy'}>Privacy policy</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/return'}>Return policy</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/shipping'}>Shipping policy</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/terms-conditions'}>Terms &amp; conditions</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="f-link">
                                        <h2 className="h-footer">My account</h2>
                                        <a
                                            href="#account"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>My account</span>
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="account"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <Link to={'/account'}>My account</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/view-cart'}>My cart</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/tracking'}>Order history</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/wishlist'}>My wishlist</Link>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <Link to={'/address'}>My address</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer