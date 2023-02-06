import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
    return (
        <div>
            <section className="slider">
                <div className="home-slider owl-carousel owl-theme">
                    <div className="items">
                        <div
                            className="img-back"
                            style={{ backgroundImage: "url(image/slider1.jpg)" }}
                        >
                            <div className="h-s-content slide-c-l">
                                <span>Summer vage sale</span>
                                <h1>
                                    Fresh fruits
                                    <br />
                                    &amp;vegetable
                                </h1>
                                <Link to={'/listproducts'} className="btn btn-style1">
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div
                            className="img-back"
                            style={{ backgroundImage: "url(image/slider2.jpg)" }}
                        >
                            <div className="h-s-content slide-c-r">
                                <span>Organic indian masala</span>
                                <h1>
                                    Prod of indian
                                    <br />
                                    100% pacaging
                                </h1>
                                <Link to={'/listproducts'} className="btn btn-style1">
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div
                            className="img-back"
                            style={{ backgroundImage: "url(image/slider3.jpg)" }}
                        >
                            <div className="h-s-content slide-c-c">
                                <span>Top selling!</span>
                                <h1>Fresh for your health</h1>
                                <Link to={'/listproducts'} className="btn btn-style1">
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider