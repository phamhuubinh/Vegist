import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div>
            <section className="t-banner1 section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home-offer-banner">
                                <div className="o-t-banner">
                                    <Link to={'/listproducts'} className="image-b">
                                        <img
                                            className="img-fluid"
                                            src="image/banner-1.jpg"
                                            alt="banner"
                                        />
                                    </Link>
                                    <div className="o-t-content">
                                        <h6>Fresh fruits, vagetable on our product</h6>
                                        <Link to={'/listproducts'} className="btn btn-style1">
                                            Shop now
                                        </Link>
                                    </div>
                                </div>
                                <div className="o-t-banner">
                                    <Link to={'/listproducts'} className="image-b">
                                        <img
                                            className="img-fluid"
                                            src="image/banner-2.jpg"
                                            alt="banner"
                                        />
                                    </Link>
                                    <div className="o-t-content banner-color">
                                        <h6>Vagetable eggplant 100% fresh food</h6>
                                        <Link to={'/listproducts'} className="btn btn-style1">
                                            Shop now
                                        </Link>
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

export default Banner