import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const OrderComplete = () => {
    const cartList = JSON.parse(window.localStorage.getItem('cartList'))
    const [money, setMoney] = useState(0)

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
    }, [cartList])

    var val = Math.floor(1000 + Math.random() * 9000); // mã số sản phẩm
    // khởi tạo thời gian
    var presentDate = new Date();
    // chuyển đổi số tháng sang chữ tháng
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let nameMonth = month[d.getMonth()];
    // phân biệt sáng tối
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    // xóa danh sách sản phẩm đã mua
    const handleDeleteCartList = () => {
        localStorage.removeItem('cartList');
    }

    return (
        <div>
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="order-area">
                                <div className="order-price">
                                    <ul className="total-order">
                                        <li>
                                            <span className="order-no">Order no. {val}</span>
                                            <span className="order-date">
                                                {presentDate.getDate()}th {nameMonth} {presentDate.getFullYear()} {formatAMPM(presentDate)}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="total-price">Order total</span>
                                            <span className="amount">${money}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="order-details">
                                    <span className="text-success order-i">
                                        <i className="fa fa-check-circle" />
                                    </span>
                                    <h4>Thank you for order</h4>
                                    <span className="order-s">
                                        Your order will ship within few hours
                                    </span>
                                    <Link to={'/tracking'} className="tracking-link btn btn-style1" onClick={handleDeleteCartList}>
                                        Tracking details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderComplete