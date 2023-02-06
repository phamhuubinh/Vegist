import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosUser from '../../../api/vegist'

const Billing = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstAddress, setFirstAddress] = useState('')
    const [secondAddress, setSecondAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [submit, setSubmit] = useState(false)

    // khởi tạo dữ liệu từ user
    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setFirstAddress(user.firstAddress)
        setSecondAddress(user.secondAddress)
        setCity(user.city)
        setState(user.state)
        setPinCode(user.pinCode)
        setCountry(user.country)
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
        } else if (name === "secondaddress") {
            setSecondAddress(value)
        } else if (name === "city") {
            setCity(value)
        } else if (name === "state") {
            setState(value)
        } else if (name === "pincode") {
            setPinCode(value)
        } else if (name === "country") {
            setCountry(value)
        } else if (name === "phone") {
            setPhone(value)
        }
    }

    // kiểm tra dữ liệu ô input
    const handleSubmit = async () => {
        if (firstName === "" || lastName === "" || firstAddress === "" || secondAddress === "" || city === "" || state === "" || pinCode === "" || country === "" || phone === "") {
            setSubmit(true)
        } else {
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                firstAddress: firstAddress,
                secondAddress: secondAddress,
                city: city,
                state: state,
                pinCode: pinCode,
                country: country,
                phoneNumber: phone,
                email: user.email,
                password: user.password,
                wishList: user.wishList,
                cart: user.cart
            }
            await axiosUser.put('users/' + user.id, newUser)
            navigate('/view-cart')
        }
    }

    return (
        <div>
            {/* map area start */}
            <section className="contact section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="billing-area">
                                <div className="billing-title">
                                    <h4>Shipping address</h4>
                                </div>
                                <div className="billing-address-1">
                                    <ul className="add-name">
                                        <li className="billing-name">
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
                                        <li className="billing-name">
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
                                    <ul className="add-name">
                                        <li className="billing-name">
                                            <label>Address 1</label>
                                            <input
                                                type="text"
                                                name="firstaddress"
                                                placeholder="Address line 1"
                                                onChange={handleChange}
                                                value={firstAddress}
                                            />
                                            {submit && firstAddress === "" ?
                                                <span style={{ color: 'red' }}>Vui lòng nhập địa chỉ của bạn</span>
                                                : ''}
                                        </li>
                                        <li className="billing-name">
                                            <label>Address 2</label>
                                            <input
                                                type="text"
                                                name="secondaddress"
                                                placeholder="Address line 2"
                                                onChange={handleChange}
                                                value={secondAddress}
                                            />
                                            {submit && secondAddress === "" ?
                                                <span style={{ color: 'red' }}>Vui lòng nhập lại địa chỉ của bạn</span>
                                                : ''}
                                        </li>
                                    </ul>
                                    <ul className="billing-locatio">
                                        <li className="billing-info">
                                            <label>City</label>
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
                                        <li className="billing-info">
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
                                        <li className="billing-info">
                                            <label>Pincode</label>
                                            <input
                                                type="text"
                                                name="pincode"
                                                placeholder="Enter your pincode"
                                                onChange={handleChange}
                                                value={pinCode}
                                            />
                                            {submit && pinCode === "" ?
                                                <span style={{ color: 'red' }}>Vui lòng nhập mã pin của bạn</span>
                                                : ''}
                                        </li>
                                    </ul>
                                    <ul className="country-info">
                                        <li className="billing-country">
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
                                        <li className="billing-country">
                                            <label>Phone number</label>
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
                                <div className="next-button">
                                    <a href='/#'>Back</a>
                                    <a href='#/' onClick={handleSubmit}>Next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* map area end */}
        </div>
    )
}

export default Billing