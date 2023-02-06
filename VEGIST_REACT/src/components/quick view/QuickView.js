import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_handleCart, act_handleWishList } from '../../redux/actions'

const QuickView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state => state.QuickView)
    const image = product.image
    const [imgInner1, setImgInner1] = useState('')
    const [imgZoom1, setImgZoom1] = useState('')
    const [imgInner2, setImgInner2] = useState('')
    const [imgZoom2, setImgZoom2] = useState('')

    // lấy ảnh từ redux
    useEffect(() => {
        image?.map(item => {
            setImgInner1(item.imginner1)
            setImgInner2(item.imginner2)
            setImgZoom1(item.imgzoom1)
            setImgZoom2(item.imgzoom2)
            return item
        })
    }, [image])

    // sản phẩm muốn mua
    const handleResetCart = () => {
        dispatch(act_handleCart(product))
        window.location.reload()
    }

    // sản phẩm yêu thích
    const handleRestWistlist = () => {
        dispatch(act_handleWishList(product))
        window.location.reload()
    }

    return (
        <div>
            {/* quick veiw start */}
            <section className="quick-view">
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Product quickview
                                </h5>
                                <a
                                    href="#/"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="ion-close-round" />
                                </a>
                            </div>
                            <div className="quick-veiw-area">
                                <div className="quick-image">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="image-1">
                                            <a href="#/" className="long-img">
                                                <img
                                                    src={imgZoom1}
                                                    className="img-fluid"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-2">
                                            <a href="#/" className="long-img">
                                                <img
                                                    src={imgZoom2}
                                                    className="img-fluid"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs quick-slider owl-carousel owl-theme">
                                        <li className="nav-item items">
                                            <a
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                href="#image-1"
                                            >
                                                <img
                                                    src={imgInner1}
                                                    className="img-fluid"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-2">
                                                <img
                                                    src={imgInner2}
                                                    className="img-fluid"
                                                    alt="iamge"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="quick-caption">
                                    <h4>{product.name}</h4>
                                    <div className="quick-price">
                                        {
                                            product.discount > 0 ?
                                                <span className="new-price">${product.price - (product.price * product.discount / 100)} USD</span>
                                                : product.discount === 0 ?
                                                    <span className="new-price">${product.price}.00 USD</span>
                                                    : ''
                                        }
                                        {
                                            product.discount > 0 ?
                                                <span className="old-price">
                                                    <del>${product.price} USD</del>
                                                </span>
                                                : ''
                                        }
                                    </div>
                                    <div className="quick-rating">
                                        {[...Array(product.rating)].map((e, i) => (<i className="fa fa-star c-star" key={i} />))}
                                        {Array.from({ length: 5 - product.rating }, (v, i) => <i className="fa fa-star-o" key={i} />)}
                                    </div>
                                    <div className="pro-description">
                                        <p>
                                            Lorem ipsum is simply dummy text of the printing and
                                            typesetting industry. lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and
                                        </p>
                                    </div>
                                    <div className="pro-size">
                                        <label>Size: </label>
                                        <select>
                                            <option>1 ltr</option>
                                            <option>3 ltr</option>
                                            <option>5 ltr</option>
                                        </select>
                                    </div>
                                    <div className="plus-minus">
                                        <span>
                                            <a href="#/" className="minus-btn text-black">
                                                -
                                            </a>
                                            <input type="text" name="name" defaultValue={1} />
                                            <a href="#/" className="plus-btn text-black">
                                                +
                                            </a>
                                        </span>
                                        <a href='#/' className="quick-cart" onClick={handleResetCart}>
                                            <i className="fa fa-shopping-bag" />
                                        </a>
                                        <a href='#/' className="quick-wishlist" onClick={handleRestWistlist}>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* quick veiw end */}
        </div>
    )
}

export default QuickView