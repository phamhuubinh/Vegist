import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Questions = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(null);
    const [isDialog, setIsDialog] = useState(false)

    // kiểm tra định dạnh email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // lấy dữ liệu từ input
    const handleEmail = (e) => {
        setValue(e.target.value)
    };

    // kiểm tra ô input
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail(value)) {
            setError('Vui lòng nhập email của bạn');
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        } else {
            setError(null);
            setIsDialog(true)
            setValue('')
        }
    }

    // đóng dialog
    const handleClose = () => {
        setIsDialog(false)
    }

    return (
        <div>
            {/* faq's collapse start */}
            <section className="faqs-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="faq-title">
                                <h1>FAQ's</h1>
                                <p>
                                    Below are frequently asked questions, you may find the answer for
                                    yourself
                                </p>
                            </div>
                            <div className="faq-box">
                                <ul className="faq-ul">
                                    <li className="faq-li">
                                        <h3>
                                            <span>1.</span> What is mikshaa’s return policy?
                                        </h3>
                                        <span className="faq-desc">
                                            Our 100% buyer protection program allows for easy returns Only
                                            for products not as per description/photo on the damaged
                                            defective broken" condition.
                                        </span>
                                    </li>
                                    <li className="faq-li">
                                        <h3>
                                            <span>2.</span> How to raise dispute for an order?
                                        </h3>
                                        <span className="faq-desc">
                                            You can raise a dispute within 7 days of delivery, in by
                                            sending an email to support@mikshaa.com with images of broken
                                            defective damaged 7 days of...
                                        </span>
                                    </li>
                                    <li className="faq-li">
                                        <h3>
                                            <span>3.</span> When will i be refunded?
                                        </h3>
                                        <span className="faq-desc">
                                            Self ship orders We will refund when your item back from
                                            warehouse. The refund amount wii be credited within 3 to 5
                                            working days in your Mikshaa Acoount.
                                        </span>
                                    </li>
                                </ul>
                                <ul className="faq-ul">
                                    <li className="faq-li">
                                        <h3>
                                            <span>4.</span> What are the shipping charges?
                                        </h3>
                                        <span className="faq-desc">
                                            Delivery charge varies with each product. Most of product FREE
                                            Most of product FREE delivery in India delivery charge varies
                                            with each product. Most of delivery in India.
                                        </span>
                                    </li>
                                    <li className="faq-li">
                                        <h3>
                                            <span>5.</span> What is the estimated delivery time?
                                        </h3>
                                        <span className="faq-desc">
                                            The estimated time of delivery is within 7 working days for
                                            domestic orders and 15-20 working days for international
                                            orders. All 4 to 5 days from the warehouse.
                                        </span>
                                    </li>
                                    <li className="faq-li">
                                        <h3>
                                            <span>6.</span> How will the delivery be done?
                                        </h3>
                                        <span className="faq-desc">
                                            We try to process all deliveries through reputed courier
                                            companies like Bluedart, Aramex,E-come, DTDC, DHL and Fedex.
                                            In some cases, your pincode by these.
                                        </span>
                                    </li>
                                </ul>
                                <Link to={'/contact'} className="btn-style1">
                                    Still have a question?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq's collapse end */}
            {/* collapse start */}
            <section className="faq-collapse section-b-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="faq-title">
                                <h1>General questions</h1>
                            </div>
                            <div className="faq-start">
                                <span>Q.1</span>
                                <a
                                    href="#collapse-7"
                                    data-bs-toggle="collapse"
                                    className="collapse-title"
                                >
                                    How are items packaged?
                                </a>
                                <div className="collapse collapse-content" id="collapse-7">
                                    <p>
                                        All items are carefully packaged as to avoid any form of damage.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-start">
                                <span>Q.2</span>
                                <a
                                    href="#collapse-8"
                                    data-bs-toggle="collapse"
                                    className="collapse-title"
                                >
                                    Who would be responsible for paying local taxes in countries
                                    outside of India?
                                </a>
                                <div className="collapse collapse-content" id="collapse-8">
                                    <p>
                                        Customs duty &amp; other international taxes etc. if applicable
                                        will have to be borne by the customer according to the laws of
                                        the land.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-start">
                                <span>Q.3</span>
                                <a
                                    href="#collapse-9"
                                    data-bs-toggle="collapse"
                                    className="collapse-title"
                                >
                                    {" "}
                                    How do i pay for a Mikshaa’s purchase?
                                </a>
                                <div className="collapse collapse-content" id="collapse-9">
                                    <p>
                                        Mikshaa offers you multiple payment methods. Whatever your
                                        online mode of payment, you can trust assured that Mikshaa's
                                        trusted payment gateway partners use secure encryption
                                        technology to keep your transaction details confidential at all
                                        times.
                                    </p>
                                    <p>
                                        You may use Internet Banking, Debit Card, Credit Card and Cash
                                        on Delivery to make your purchase. We also accept payments made
                                        using Visa, MasterCard, American Express and Any Club
                                        credit/debit cards.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-start">
                                <span>Q.4</span>
                                <a
                                    href="#collapse-10"
                                    data-bs-toggle="collapse"
                                    className="collapse-title"
                                >
                                    Can i make a credit/debit card or Internet Banking payment through
                                    my mobile?
                                </a>
                                <div className="collapse collapse-content" id="collapse-10">
                                    <p>
                                        Yes, you can make credit card payments through the Mikshaa
                                        mobile site. Mikshaa uses 256-bit encryption technology to
                                        protect your card information while securely transmitting it to
                                        the secure and trusted payment gateways managed by leading
                                        banks.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-start">
                                <span>Q.5</span>
                                <a
                                    href="#collapse-11"
                                    data-bs-toggle="collapse"
                                    className="collapse-title"
                                >
                                    Is it safe to use my credit/debit card on Mikshaa?
                                </a>
                                <div className="collapse collapse-content" id="collapse-11">
                                    <p>Is it safe to use my credit/debit card on Mikshaa?</p>
                                </div>
                            </div>
                            <div className="faq-start">
                                <span>Q.6</span>
                                <a
                                    href="#collapse-12"
                                    data-bs-toggle="collapse"
                                    className="collapse-title"
                                >
                                    Does Craftsvilla store my credit card information?
                                </a>
                                <div className="collapse collapse-content" id="collapse-12">
                                    <p>
                                        No, Mikshaa does not collect or store your account information
                                        at all. Your transaction is authorized at multiple points, first
                                        by EBS/CCavenue and subsequently by Visa/MasterCard/Amex secure
                                        directly without any information passing through us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* collapse end */}
            {/* News Letter start */}
            <section className="news-letter1">
                <div
                    className="section-tb-padding"
                    style={{ backgroundImage: "url(image/banner3.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home-news">
                                    <h2>Get The Latest Deals</h2>
                                    <p>And Receive 20% Off Coupon For First Shopping</p>
                                    <form>
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="Enter your email address"
                                            value={value}
                                            onChange={handleEmail}
                                        />
                                        {error && <h2 style={{ color: 'red', fontSize: "large", margin: "8px 0 0 24px" }}>{error}</h2>}
                                        <button className="btn btn-style3" onClick={handleSubmit}>Subscribe</button>
                                        <button className="btn btn-style1 news-sub" onClick={handleSubmit}>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* News Letter end */}
            <Dialog
                open={isDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Thông báo!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Phiếu mua hàng ưu đãi 20% đã được gửi đến email của bạn.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Đồng ý</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Questions