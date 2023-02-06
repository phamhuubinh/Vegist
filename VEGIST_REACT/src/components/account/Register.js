import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { act_createUser } from '../../redux/actions'
import emailUser from '../../api/vegist'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState(false)

    // tạo tài khoản
    const createUser = async () => {
        const res = await emailUser.get('users')
        const checkEmailUser = res.data.map(item => item.email)
        const check = checkEmailUser.find(item => item === email)
        if (check === email) {
            alert("Email của bạn đã được sử dụng")
        } else if (firstName !== '' && lastName !== '' && email !== '' && password !== '') {
            dispatch(act_createUser({ firstName, lastName, email, password }))
            navigate('/login')
        } else {
            setSubmit(true)
        }
    }

    return (
        <div>
            {/* login start */}
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="register-area">
                                <div className="register-box">
                                    <h1>Create account</h1>
                                    <p>Please register below account detail</p>
                                    <form>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Firts name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        {submit && firstName === '' ?
                                            <span style={{
                                                marginLeft: '10px',
                                                fontSize: 'smaller',
                                                color: 'red',
                                                fontStyle: 'italic'
                                            }}>Vui lòng nhập tên của bạn</span>
                                            : ''
                                        }
                                        <input
                                            type="text"
                                            name="l-name"
                                            placeholder="Last name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        {submit && lastName === '' ?
                                            <span style={{
                                                marginLeft: '10px',
                                                fontSize: 'smaller',
                                                color: 'red',
                                                fontStyle: 'italic'
                                            }}>Vui lòng nhập họ của bạn</span>
                                            : ''
                                        }
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
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
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
                                        <a
                                            href='#/'
                                            className="btn-style1"
                                            onClick={createUser}
                                        >
                                            Create
                                        </a>
                                    </form>
                                </div>
                                <div className="register-account">
                                    <h4>Already an account holder?</h4>
                                    <Link to={'/login'} className="ceate-a">
                                        Log in
                                    </Link>
                                    <div className="register-info">
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

export default Register