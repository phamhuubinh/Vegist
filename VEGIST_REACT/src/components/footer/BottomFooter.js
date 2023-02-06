import React from 'react'

const BottomFooter = () => {
    return (
        <div>
            <section className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="f-bottom">
                                <li className="f-c f-copyright">
                                    <p>
                                        Copyright <i className="fa fa-copyright" /> Devmaster Academy
                                    </p>
                                </li>
                                <li className="f-c f-social">
                                    <a href="https://www.whatsapp.com/" className="f-icn-link">
                                        <i className="fa fa-whatsapp" />
                                    </a>
                                    <a href="https://www.facebook.com/" className="f-icn-link">
                                        <i className="fa fa-facebook-f" />
                                    </a>
                                    <a href="https://twitter.com/" className="f-icn-link">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="https://www.instagram.com/" className="f-icn-link">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="https://www.pinterest.com/" className="f-icn-link">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    <a href="https://www.youtube.com/" className="f-icn-link">
                                        <i className="fa fa-youtube" />
                                    </a>
                                </li>
                                <li className="f-c f-payment">
                                    <a href="checkout.html">
                                        <img
                                            src="image/payment.png"
                                            className="img-fluid"
                                            alt="payment"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BottomFooter