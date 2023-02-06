import React from 'react'

const Tracking = () => {
    return (
        <div>
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="track-area">
                                <div className="track-price">
                                    <ul className="track-order">
                                        <li>
                                            <h4>Your order id is: 121</h4>
                                        </li>
                                        <li>
                                            <span className="track-status">Status:</span> Picked by
                                            courier
                                        </li>
                                    </ul>
                                </div>
                                <div className="track-main">
                                    <div className="track">
                                        <div className="step active">
                                            <span className="icon">
                                                <i className="fa fa-check" />
                                            </span>
                                            <span className="text">Order confirmed</span>
                                        </div>
                                        <div className="step active">
                                            <span className="icon">
                                                <i className="fa fa-user" />
                                            </span>
                                            <span className="text">Picked by courier</span>
                                        </div>
                                        <div className="step">
                                            <span className="icon">
                                                <i className="fa fa-truck" />
                                            </span>
                                            <span className="text"> On the way </span>
                                        </div>
                                        <div className="step">
                                            <span className="icon">
                                                <i className="fa fa-archive" />
                                            </span>{" "}
                                            <span className="text">Ready for pickup</span>
                                        </div>
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

export default Tracking