import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { act_handleProduct } from '../../redux/actions'

const CheckOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartList = JSON.parse(window.localStorage.getItem('cartList'))
    const user = JSON.parse(window.localStorage.getItem('user'))
    const [money, setMoney] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstAddress, setFirstAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [submit, setSubmit] = useState(false)

    // khởi tạo dữ liệu từ user
    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setFirstAddress(user.firstAddress)
        setCity(user.city)
        setState(user.state)
        setCountry(user.country)
        setEmail(user.email)
        setPhone(user.phoneNumber)
    }, [])

    // lấy dữ liệu từ input
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (name === "firstname") {
            setFirstName(value)
        } else if (name === "lastname") {
            setLastName(value)
        } else if (name === "firstaddress") {
            setFirstAddress(value)
        } else if (name === "city") {
            setCity(value)
        } else if (name === "state") {
            setState(value)
        } else if (name === "country") {
            setCountry(value)
        } else if (name === "phone") {
            setPhone(value)
        } else if (name === "email") {
            setEmail(value)
        }
    }

    // check dữ liệu
    const handleSubmit = async () => {
        if (firstName === "" || lastName === "" || firstAddress === "" || city === "" || state === "" || country === "" || phone === "") {
            setSubmit(true)
        } else {
            navigate('/ordercomplete')
        }
    }

    // danh sách sản phẩm
    const elementCart = cartList?.map(item => {
        // lấy dữ liệu sản phẩm
        const handleProduct = () => {
            dispatch(act_handleProduct(item))
        }

        return (
            <ul className="check-ul" key={item.id}>
                <li>
                    <div className="check-pro-img">
                        <Link to={'/product'} onClick={handleProduct}>
                            <img
                                src={item.image.map(item => item.imginner1)}
                                className="img-fluid"
                                alt="img"
                            />
                        </Link>
                    </div>
                    <div className="check-content">
                        <Link to={'/product'} onClick={handleProduct}>{item.name}</Link>
                        <span className="check-price">${item.total}</span>
                    </div>
                </li>
            </ul>
        )
    })

    // lấy tên các sản phẩm và total
    const elementOrder = cartList?.map(item => {
        return (
            <li className="order-details" key={item.id}>
                <span>{item.name}:</span>
                <span>${item.total}</span>
            </li>
        )
    })

    // total
    useEffect(() => {
        const price = []
        cartList?.map(item => {
            price.push(item.total)
            return item
        })
        let sum = 0;
        for (let i = 0; i < price.length; i++) {
            sum += price[i];
        }
        setMoney(sum)
    }, [])

    return (
        <div>
            {/* checkout page start */}
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="checkout-area">
                                <div className="billing-area">
                                    <form>
                                        <h2>Billing details</h2>
                                        <div className="billing-form">
                                            <ul className="billing-ul input-2">
                                                <li className="billing-li">
                                                    <label>First name</label>
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        placeholder="First name"
                                                        onChange={handleChange}
                                                        value={firstName}
                                                    />
                                                    {submit && firstName === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập tên của bạn</span>
                                                        : ''}
                                                </li>
                                                <li className="billing-li">
                                                    <label>Last name</label>
                                                    <input
                                                        type="text"
                                                        name="lastname"
                                                        placeholder="Last name"
                                                        onChange={handleChange}
                                                        value={lastName}
                                                    />
                                                    {submit && lastName === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập họ và tên đệm của bạn</span>
                                                        : ''}
                                                </li>
                                            </ul>
                                            <ul className="billing-ul">
                                                <li className="billing-li">
                                                    <label>Company name (Optional)</label>
                                                    <input
                                                        type="text"
                                                        name="company details"
                                                        placeholder="Company name"
                                                    />
                                                </li>
                                            </ul>
                                            <ul className="billing-ul">
                                                <li className="billing-li">
                                                    <label>Country</label>
                                                    <select onChange={handleChange} name="country">
                                                        <option>-----</option>
                                                        <option value="australia">Australia</option>
                                                        <option value="china">China</option>
                                                        <option value="cuba">Cuba</option>
                                                        <option value="germany">Germany</option>
                                                        <option value="india">India</option>
                                                        <option value="italy">Italy</option>
                                                        <option value="japan">Japan</option>
                                                        <option value="korea">Korea</option>
                                                        <option value="russinanfederation">Russinan Federation</option>
                                                        <option value="unitedkingdom">United Kingdom</option>
                                                        <option value="unitedstates">United States</option>
                                                        <option value="vietnam">Viet Nam</option>
                                                    </select>
                                                </li>
                                            </ul>
                                            <ul className="billing-ul">
                                                <li className="billing-li">
                                                    <label>Street address</label>
                                                    <input
                                                        type="text"
                                                        name="firstaddress"
                                                        placeholder="Street address"
                                                        onChange={handleChange}
                                                        value={firstAddress}
                                                    />
                                                    {submit && firstAddress === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập địa chỉ của bạn</span>
                                                        : ''}
                                                </li>
                                            </ul>
                                            <ul className="billing-ul">
                                                <li className="billing-li">
                                                    <label>Apartment,suite,unit etc. (Optional)</label>
                                                    <input type="text" name="--" placeholder="" />
                                                </li>
                                            </ul>
                                            <ul className="billing-ul">
                                                <li className="billing-li">
                                                    <label>Town / City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        placeholder="Enter your city"
                                                        onChange={handleChange}
                                                        value={city}
                                                    />
                                                    {submit && city === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập thành phố</span>
                                                        : ''}
                                                </li>
                                            </ul>
                                            <ul className="billing-ul">
                                                <li className="billing-li">
                                                    <label>State</label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        placeholder="Enter your city"
                                                        onChange={handleChange}
                                                        value={state}
                                                    />
                                                    {submit && state === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập quận/huyện</span>
                                                        : ''}
                                                </li>
                                            </ul>
                                            <ul className="billing-ul input-2">
                                                <li className="billing-li">
                                                    <label>Email address</label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email address"
                                                        onChange={handleChange}
                                                        value={email}
                                                    />
                                                    {submit && email === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập email của bạn</span>
                                                        : ''}
                                                </li>
                                                <li className="billing-li">
                                                    <label>Phone</label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Enter your Phone number"
                                                        onChange={handleChange}
                                                        value={phone}
                                                    />
                                                    {submit && phone === "" ?
                                                        <span style={{ color: 'red' }}>Vui lòng nhập số điện thoại của bạn</span>
                                                        : ''}
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                    <div className="billing-details">
                                        <form>
                                            <h2>Shipping details</h2>
                                            <ul className="shipping-form">
                                                <li className="check-box">
                                                    <input type="checkbox" name="--" />
                                                    <label>Ship to a different address?</label>
                                                </li>
                                                <li className="comment-area">
                                                    <label>Order notes(Optional)</label>
                                                    <textarea
                                                        name="comments"
                                                        rows={4}
                                                        cols={80}
                                                        defaultValue={""}
                                                    />
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                                <div className="order-area">
                                    <div className="check-pro">
                                        <h2>In your cart (2)</h2>
                                        {elementCart}
                                    </div>
                                    <h2>Your order</h2>
                                    <ul className="order-history">
                                        <li className="order-details">
                                            <span>Product:</span>
                                            <span>Total</span>
                                        </li>
                                        {elementOrder}
                                        <li className="order-details">
                                            <span>Subtotal:</span>
                                            <span>${money}</span>
                                        </li>
                                        <li className="order-details">
                                            <span>Shipping Charge:</span>
                                            <span>Free shipping</span>
                                        </li>
                                        <li className="order-details">
                                            <span>Total:</span>
                                            <span>${money}</span>
                                        </li>
                                    </ul>
                                    <form>
                                        <ul className="order-form">
                                            <li>
                                                <input type="checkbox" name="--" />
                                                <label>Direct bank transfer</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="--" />
                                                <label>Cheque payment</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="--" />
                                                <label>Paypal</label>
                                            </li>
                                            <li className="pay-icon">
                                                <a href="#/">
                                                    <i className="fa fa-credit-card" />
                                                </a>
                                                <a href="#/">
                                                    <i className="fa fa-cc-visa" />
                                                </a>
                                                <a href="#/">
                                                    <i className="fa fa-cc-paypal" />
                                                </a>
                                                <a href="#/">
                                                    <i className="fa fa-cc-mastercard" />
                                                </a>
                                            </li>
                                        </ul>
                                    </form>
                                    <div className="checkout-btn">
                                        <a href='#/' className="btn-style1" onClick={handleSubmit}>
                                            Place order
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* checkout page end */}
        </div>
    )
}

export default CheckOut