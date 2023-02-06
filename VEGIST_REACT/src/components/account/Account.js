import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosUser from '../../api/vegist'

const Account = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const [dataUsers, setDataUsers] = useState([])
    const wishList = user?.wishList

    // lấy dữ liệu từ api
    useEffect(() => {
        async function fetchData() {
            const res = await axiosUser.get('users')
            setDataUsers(res.data)
        }
        fetchData()
    }, [])

    // lấy ra dữ liệu người dùng đã đăng nhập
    const elementUser = dataUsers?.map(item => {
        if (item.id === user?.id) {
            return <ul className="a-details" key={item.id}>
                <li>{item.lastName} {item.firstName}</li>
                <li className="mail-register">{item.email}</li>
            </ul>
        }
    })

    // thoát tài khoản người dùng
    const handleLogout = () => {
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('cartList')
    }

    return (
        <div>
            {/* faq's collapse start */}
            <section className="shipping-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="account-title">
                                <h1>Welcome Vegist</h1>
                            </div>
                            <div className="account-area">
                                <div className="account">
                                    <h4>My account</h4>
                                    <ul className="page-name">
                                        <li className="register-id">
                                            <Link to={'/wishlist'}>Wishlist({wishList ? wishList.length : '0'})</Link>
                                        </li>
                                        <li className="register-id">
                                            <Link to={'/login'} onClick={handleLogout}>Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="account-detail">
                                    <h4>Account details</h4>
                                    {elementUser}
                                </div>
                            </div>
                            <div className="order-details">
                                <h4>Order history</h4>
                                <p>You haven't placed any orders yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq's collapse end */}
        </div>
    )
}

export default Account