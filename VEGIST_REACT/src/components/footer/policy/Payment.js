import React from 'react'

const Payment = () => {
    return (
        <div>
            {/* faq's collapse start */}
            <section className="faq's-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="payment-title">
                                <h1>Payment policy</h1>
                            </div>
                            <div className="payment">
                                <span>Q.1</span>
                                <h4 className="payment-title">
                                    How do i pay for a Vegist’s purchase?
                                </h4>
                                <div className="payment-content">
                                    <p>
                                        Vegist offers you multiple payment methods. Whatever your online
                                        mode of payment, you can trust assured that Vegist trusted
                                        payment gateway partners use secure encryption technology to
                                        keep your transaction details confidential at all times.
                                    </p>
                                    <p>
                                        You may use Internet Banking, Debit Card, Credit Card and Cash
                                        on Delivery to make your purchase. We also accept payments made
                                        using Visa, MasterCard, American Express and Any Club
                                        credit/debit cards.
                                    </p>
                                </div>
                            </div>
                            <div className="payment">
                                <span>Q.2</span>
                                <h4 className="payment-title">
                                    Can i make a credit/debit card or Internet Banking payment through
                                    my mobile?
                                </h4>
                                <div className="payment-content">
                                    <p>
                                        Yes, you can make credit card payments through the Vegist mobile
                                        site. Vegist uses 256-bit encryption technology to protect your
                                        card information while securely transmitting it to the secure
                                        and trusted payment gateways managed by leading banks.
                                    </p>
                                </div>
                            </div>
                            <div className="payment">
                                <span>Q.3</span>
                                <h4 className="payment-title">
                                    Is it safe to use my credit/debit card on Vegist?
                                </h4>
                                <div className="payment-content">
                                    <p>
                                        All Credit/Debit card details remain confidential and private.
                                        Vegist and our trusted payment gateways use SSL encryption
                                        technology to protect your card information.
                                    </p>
                                </div>
                            </div>
                            <div className="payment">
                                <span>Q.4</span>
                                <h4 className="payment-title">
                                    Does Craftsvilla store my credit card information?
                                </h4>
                                <div className="payment-content">
                                    <p>
                                        No, Vegist does not collect or store your account information at
                                        all. Your transaction is authorized at multiple points, first by
                                        EBS/CCavenue and subsequently by Visa/MasterCard/Amex secure
                                        directly without any information passing through us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq's collapse end */}
        </div>
    )
}

export default Payment