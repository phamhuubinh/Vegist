import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, SetEmail] = useState('')
    const [text, setText] = useState('')
    const [isDialog, setIsDialog] = useState(false)
    const [submit, setSubmit] = useState(false)

    // lấy dữ liệu từ ô input
    const handleChange = (e, source) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        if (e.target.name === 'Email') {
            SetEmail(e.target.value)
        }
        if (e.target.name === 'text') {
            setText(e.target.value)
        }
    }

    // kiểm tra dữ liệu từ input
    const handleSubmit = () => {
        if (name === '' || email === '' || text === '') {
            setSubmit(true)
            setIsDialog(true)
            setName('')
            SetEmail('')
            setText('')
        } else {
            setIsDialog(true)
            setSubmit(false)
            setName('')
            SetEmail('')
            setText('')
        }
    }

    // đóng dialog
    const handleClose = () => {
        setIsDialog(false)
    }

    return (
        <div>
            {/* map area start */}
            <section className="contact section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="map-area">
                                <div className="map-title">
                                    <h1>Contact us</h1>
                                </div>
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126572.60843180324!2d72.77816346362009!3d21.169989019558837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1612272594330!5m2!1sen!2sin"
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex={0}
                                        title='frame'
                                    />
                                </div>
                                <div className="map-details section-t-padding">
                                    <div className="contact-info">
                                        <div className="contact-details">
                                            <h4>Drop us message</h4>
                                            <form>
                                                <label>Your name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    onChange={handleChange}
                                                    value={name}
                                                />
                                                <label>Email</label>
                                                <input
                                                    type="text"
                                                    name="Email"
                                                    placeholder="Enter your email address"
                                                    onChange={handleChange}
                                                    value={email}
                                                />
                                                <label>Message</label>
                                                <textarea
                                                    rows={5}
                                                    placeholder="Your message hare..."
                                                    defaultValue={""}
                                                    name="text"
                                                    value={text}
                                                    onChange={handleChange}
                                                />
                                            </form>
                                            <a href="#/" onClick={handleSubmit} className="btn-style1">
                                                Submit <i className="ti-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="information">
                                            <h4>Get in touch</h4>
                                            <p className="info-description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Rerum earum eveniet dolorum suscipit nesciunt incidunt animi
                                                repudiandae ab at, tenetur distinctio voluptate vel illo
                                                similique.
                                            </p>
                                            <div className="contact-in">
                                                <ul className="info-details">
                                                    <li>
                                                        <i className="fa fa-street-view" />
                                                    </li>
                                                    <li>
                                                        <h4>Address</h4>
                                                        <p>25, Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội</p>
                                                    </li>
                                                </ul>
                                                <ul className="info-details">
                                                    <li>
                                                        <i className="fa fa-phone" />
                                                    </li>
                                                    <li>
                                                        <h4>Phone</h4>
                                                        <p>0969 609 003</p>
                                                    </li>
                                                </ul>
                                                <ul className="info-details">
                                                    <li>
                                                        <i className="fa fa-envelope" />
                                                    </li>
                                                    <li>
                                                        <h4>Email</h4>
                                                        <p>devmaster.contact@gmail.com</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* map area end */}
            {submit &&
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
                            Vui lòng nhập đầy đủ thông tin.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Đóng</Button>
                    </DialogActions>
                </Dialog>
            }
            {!submit &&
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
                            Cảm ơn bạn đã liên hệ với chúng tôi về các sản phẩm hiện tại và mức giá.
                            Yêu cầu của bạn sẽ được trả lời trong thời gian sớm nhất.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Đóng</Button>
                    </DialogActions>
                </Dialog>}
        </div>
    )
}

export default ContactUs