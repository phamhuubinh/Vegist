import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosUser from '../../api/vegist'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [valueEmail, setValueEmail] = useState('')
    const [isDialog, setIsDialog] = useState(false)

    const handleEmail = (e) => {
        setValueEmail(e.target.value)
    }

    const handlePassword = async () => {
        // call api - GET USERS
        const res = await axiosUser.get('users')
        const dataUsers = res.data
        dataUsers.filter(item => {
            if (item.email === valueEmail) {
                navigate('/login')
            } else {
                setIsDialog(true)
                setValueEmail('')
            }
            return item
        })
    }

    const handleClose = () => {
        setIsDialog(false)
    }

    return (
        <div>
            <Dialog
                open={isDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Thông báo."}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Vui lòng nhập đúng địa chỉ Email mà bạn đã được đăng ký!!!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Đóng</Button>
                </DialogActions>
            </Dialog>
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="forgat-password-area">
                                <h4 className="forgot-title">Forgot password?</h4>
                                <div className="forgot-p">
                                    <span className="forgot">Reset your password here</span>
                                    <form>
                                        <input
                                            type="text"
                                            name="text"
                                            placeholder="Username or email"
                                            value={valueEmail}
                                            onChange={handleEmail}
                                        />
                                    </form>
                                    <a href='#/' className="forgot-link" onClick={handlePassword}>
                                        <span>
                                            Get new password <i className="fa fa-unlock" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword