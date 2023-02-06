import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { act_loginUser } from '../../redux/actions'
import axiosUser from '../../api/vegist'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleSignIn = async () => {
        // call api - GET USERS
        const res = await axiosUser.get('users')
        const dataUsers = res.data
        dataUsers.filter(item => {
            if (email !== '' && password !== '') {
                const checkUser = item.email === email && item.password === password
                if (checkUser) {
                    dispatch(act_loginUser(item))
                    navigate('/account')
                }
            } else {
                setSubmit(true)
            }
            return 1
        })
    }

    return (
        <div>
            {/* login start */}
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="login-area">
                                <div className="login-box">
                                    <h1>Login</h1>
                                    <p>Please login below account detail</p>
                                    <form>
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {submit && email === '' ?
                                            <span style={{
                                                marginLeft: '10px',
                                                fontSize: 'smaller',
                                                color: 'red',
                                                fontStyle: 'italic'
                                            }}>Vui lòng nhập email của bạn</span>
                                            : ''
                                        }
                                        <br />
                                        <label>Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {submit && password === '' ?
                                            <span style={{
                                                marginLeft: '10px',
                                                fontSize: 'smaller',
                                                color: 'red',
                                                fontStyle: 'italic'
                                            }}>Vui lòng nhập password của bạn</span>
                                            : ''
                                        }
                                        <a href='#/' onClick={handleSignIn} className="btn-style1">
                                            Sign in
                                        </a>
                                        <Link to={'/forgor-password'} className="re-password">
                                            Forgot your password?
                                        </Link>
                                    </form>
                                </div>
                                <div className="login-account">
                                    <h4>Don't have an account?</h4>
                                    <Link to={'/register'} className="ceate-a">
                                        Create account
                                    </Link>
                                    <div className="login-info">
                                        <Link to={'/terms-conditions'} className="terms-link">
                                            <span>*</span> Terms &amp; conditions.
                                        </Link>
                                        <p>
                                            Your privacy and security are important to us. For more
                                            information on how we use your data read our{" "}
                                            <Link to={'/privacy'}>privacy policy</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* login end */}
        </div>
    )
}

export default Login