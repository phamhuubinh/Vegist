import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const NewsLetter = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(null);
    const [isDialog, setIsDialog] = useState(false)

    // kiểm tra định dạng email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // lấy dữ liệu từ input
    const handleEmail = (e) => {
        setValue(e.target.value)
    };

    // kiểm tra email và dữ liệu ô input
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
            <section className="news-letter1">
                <div
                    className="section-tb-padding news-img"
                    style={{ backgroundImage: "url(image/banner3.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home-news">
                                    <h2>Get the latest deals</h2>
                                    <p>And receive 20% off coupon for first shopping</p>
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

export default NewsLetter