import React from 'react'

const Shipping = () => {
    return (
        <div>
            <section className="shipping-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="shipping-title">
                                <h1>Shipping policy</h1>
                            </div>
                            <div className="shipping">
                                <span>Q.1</span>
                                <h4 className="shipping-title">What are the shipping charges?</h4>
                                <div className="shipping-content">
                                    <p>
                                        Delivery charge varies with each product. Most of product FREE
                                        delivery in India.
                                    </p>
                                    <p>
                                        Some items may have a shipping cost depending on the product.
                                    </p>
                                </div>
                            </div>
                            <div className="shipping">
                                <span>Q.2</span>
                                <h4 className="shipping-title">
                                    What is the estimated delivery time?
                                </h4>
                                <div className="shipping-content">
                                    <p>
                                        The estimated time of delivery is within 7 working days for
                                        domestic orders and 15-20 working days for international orders.
                                        All orders get shipped within 4 to 5 days from the warehouse.
                                    </p>
                                </div>
                            </div>
                            <div className="shipping">
                                <span>Q.3</span>
                                <h4 className="shipping-title">How will the delivery be done?</h4>
                                <div className="shipping-content">
                                    <p>
                                        We try to process all deliveries through reputed courier
                                        companies like Bluedart, Aramex,E-come, DTDC, DHL and Fedex. In
                                        some cases, your pincode is not serviceable by these courier
                                        companies, we use Indian Speed Post for those deliveries.
                                    </p>
                                    <p>
                                        If there is no courier service available in your area, we will
                                        get in touch with you and try to work out a convenient alternate
                                        delivery location that is serviced by our courier partners.
                                    </p>
                                </div>
                            </div>
                            <div className="shipping">
                                <span>Q.4</span>
                                <h4 className="shipping-title">How are items packaged?</h4>
                                <div className="shipping-content">
                                    <p>
                                        All items are carefully packaged as to avoid any form of damage.
                                    </p>
                                </div>
                            </div>
                            <div className="shipping">
                                <span>Q.5</span>
                                <h4 className="shipping-title">
                                    Who would be responsible for paying local taxes in countries
                                    outside of India?
                                </h4>
                                <div className="shipping-content">
                                    <p>
                                        Customs duty &amp; other international taxes etc. if applicable
                                        will have to be borne by the customer according to the laws of
                                        the land.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shipping