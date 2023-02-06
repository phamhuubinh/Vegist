import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import vegistList from '../../api/vegist'
import {
    act_handleCart,
    act_handleProduct,
    act_handleWishList,
    act_listProducts,
    act_quickViewProduct
} from '../../redux/actions'

const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const vegists = useSelector(item => item.ListProducts) // lấy dữ liệu từ state

    // lấy dữ liệu từ api và gán vào state
    useEffect(() => {
        const gridList = async () => {
            const data = await vegistList.get('/vegist')
            const listData = data.data
            listData.map(item => {
                const products = item.products
                dispatch(act_listProducts(products))
                return item
            })
        }
        gridList()
    }, [dispatch])

    // mảng danh sách sản phẩm đặc biệt
    const featuredProduct = []
    vegists?.map(item => {
        const newItem = item
        newItem.categories.map(item => {
            if (item === "featuredproduct") {
                featuredProduct.push(newItem)
            }
            return item
        })
        return item
    })

    // danh sách sản phẩm đặc biệt
    const elementSpecial = featuredProduct?.map(item => {
        // lấy dữ liệu sản phẩm
        const handleProduct = () => {
            dispatch(act_handleProduct(item))
        }

        const handleQuickView = () => {
            dispatch(act_quickViewProduct(item))
        }

        // sản phẩm yêu thích
        const handleWishList = () => {
            dispatch(act_handleWishList(item))
            navigate('/wishlist')
        }

        // sản phẩm muốn mua
        const handleCart = () => {
            dispatch(act_handleCart(item))
        }

        return (
            <div className="swiper-slide" key={item.id}>
                <div className="h-t-pro">
                    <div className="tred-pro">
                        <div className="tr-pro-img">
                            <Link to={'/product'} onClick={handleProduct}>
                                <img
                                    src={item.image.map(img => img.imgpro)}
                                    alt="pro-img1"
                                    className="img-fluid"
                                />
                                <img
                                    src={item.image.map(img => img.imghover)}
                                    alt="additional"
                                    className="img-fluid additional-image"
                                />
                            </Link>
                        </div>
                        <div className="Pro-lable">
                            {item.categories.map(item => item === "newproduct" ? <span className="p-text">New</span> : '')}
                        </div>
                        <div className="Pro-lable">
                            {item.discount > 0 ? <span className="p-discount">-{item.discount}%</span> : ''}
                        </div>
                        <div className="pro-icn">
                            <a href='#/' className="w-c-q-icn" onClick={handleWishList}>
                                <i className="fa fa-heart" />
                            </a>
                            <a href='#/' className="w-c-q-icn" onClick={handleCart}>
                                <i className="fa fa-shopping-bag" />
                            </a>
                            <a
                                href="#/"
                                className="w-c-q-icn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={handleQuickView}
                            >
                                <i className="fa fa-eye" />
                            </a>
                        </div>
                    </div>
                    <div className="caption">
                        <h3>
                            <Link to={'/product'} onClick={handleProduct}>{item.name}</Link>
                        </h3>
                        <div className="rating">
                            {[...Array(item.rating)].map((e, i) => <i className="fa fa-star e-star" key={i} />)}
                            {[...Array(5 - item.rating)].map((e, i) => <i className="fa fa-star-o" key={i} />)}
                        </div>
                        <div className="pro-price">
                            {
                                item.discount > 0 ?
                                    <span className="new-price">${item.price - (item.price * item.discount / 100)} USD</span>
                                    : item.discount === 0 ?
                                        <span className="new-price">${item.price}.00 USD</span>
                                        : ''
                            }
                            {
                                item.discount > 0 ?
                                    <span className="old-price">
                                        <del>${item.price} USD</del>
                                    </span>
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    // mảng danh sách sản phẩm mới
    const newProduct = []
    vegists?.map(item => {
        const newItem = item
        newItem.categories.map(item => {
            if (item === "newproduct") {
                newProduct.push(newItem)
            }
            return item
        })
        return item
    })

    // danh sách sản phẩm mới
    const elementNew = newProduct?.map(item => {
        // lấy dữ liệu sản phẩm
        const handleProduct = () => {
            dispatch(act_handleProduct(item))
        }

        const handleQuickView = () => {
            dispatch(act_quickViewProduct(item))
        }

        // sản phẩm yêu thích
        const handleWishList = () => {
            dispatch(act_handleWishList(item))
            navigate('/wishlist')
        }

        // sản phẩm muốn mua
        const handleCart = () => {
            dispatch(act_handleCart(item))
        }

        return (
            <div className="swiper-slide" key={item.id}>
                <div className="h-t-pro">
                    <div className="tred-pro">
                        <div className="tr-pro-img">
                            <Link to={'/product'} onClick={handleProduct}>
                                <img
                                    src={item.image.map(img => img.imgpro)}
                                    alt="pro-img1"
                                    className="img-fluid"
                                />
                                <img
                                    src={item.image.map(img => img.imghover)}
                                    alt="additional"
                                    className="img-fluid additional-image"
                                />
                            </Link>
                        </div>
                        <div className="Pro-lable">
                            {item.categories.map(item => item === "newproduct" ? <span className="p-text">New</span> : '')}
                        </div>
                        <div className="Pro-lable">
                            {item.discount > 0 ? <span className="p-discount">-{item.discount}%</span> : ''}
                        </div>
                        <div className="pro-icn">
                            <a href='#/' className="w-c-q-icn" onClick={handleWishList}>
                                <i className="fa fa-heart" />
                            </a>
                            <a href='#/' onClick={handleCart} className="w-c-q-icn">
                                <i className="fa fa-shopping-bag" />
                            </a>
                            <a
                                href="#/"
                                className="w-c-q-icn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={handleQuickView}
                            >
                                <i className="fa fa-eye" />
                            </a>
                        </div>
                    </div>
                    <div className="caption">
                        <h3>
                            <Link to={'/product'} onClick={handleProduct}>{item.name}</Link>
                        </h3>
                        <div className="rating">
                            {[...Array(item.rating)].map((e, i) => <i className="fa fa-star e-star" key={i} />)}
                            {[...Array(5 - item.rating)].map((e, i) => <i className="fa fa-star-o" key={i} />)}
                        </div>
                        <div className="pro-price">
                            {
                                item.discount > 0 ?
                                    <span className="new-price">${item.price - (item.price * item.discount / 100)} USD</span>
                                    : item.discount === 0 ?
                                        <span className="new-price">${item.price}.00 USD</span>
                                        : ''
                            }
                            {
                                item.discount > 0 ?
                                    <span className="old-price">
                                        <del>${item.price} USD</del>
                                    </span>
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    // mảng danh sách sản phẩm bữa trưa
    const lunch = []
    vegists?.map(item => {
        const newItem = item
        newItem.categories.map(item => {
            if (item === "lunch") {
                lunch.push(newItem)
            }
            return item
        })
        return item
    })

    // danh sách sản phẩm bữa trưa
    const elementLunch = lunch?.map(item => {
        // lấy dữ liệu sản phẩm
        const handleProduct = () => {
            dispatch(act_handleProduct(item))
        }

        const handleQuickView = () => {
            dispatch(act_quickViewProduct(item))
        }

        // sản phẩm yêu thích
        const handleWishList = () => {
            dispatch(act_handleWishList(item))
            navigate('/wishlist')
        }

        // sản phẩm muốn mua
        const handleCart = () => {
            dispatch(act_handleCart(item))
        }

        return (
            <div className="swiper-slide" key={item.id}>
                <div className="h-t-pro">
                    <div className="tred-pro">
                        <div className="tr-pro-img">
                            <Link to={'/product'} onClick={handleProduct}>
                                <img
                                    src={item.image.map(img => img.imgpro)}
                                    alt="pro-img1"
                                    className="img-fluid"
                                />
                                <img
                                    src={item.image.map(img => img.imghover)}
                                    alt="additional"
                                    className="img-fluid additional-image"
                                />
                            </Link>
                        </div>
                        <div className="Pro-lable">
                            {item.categories.map(item => item === "newproduct" ? <span className="p-text">New</span> : '')}
                        </div>
                        <div className="Pro-lable">
                            {item.discount > 0 ? <span className="p-discount">-{item.discount}%</span> : ''}
                        </div>
                        <div className="pro-icn">
                            <a href='#/' className="w-c-q-icn" onClick={handleWishList}>
                                <i className="fa fa-heart" />
                            </a>
                            <a href='#/' onClick={handleCart} className="w-c-q-icn">
                                <i className="fa fa-shopping-bag" />
                            </a>
                            <a
                                href="#/"
                                className="w-c-q-icn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={handleQuickView}
                            >
                                <i className="fa fa-eye" />
                            </a>
                        </div>
                    </div>
                    <div className="caption">
                        <h3>
                            <Link to={'/product'} onClick={handleProduct}>{item.name}</Link>
                        </h3>
                        <div className="rating">
                            {[...Array(item.rating)].map((e, i) => <i className="fa fa-star e-star" key={i} />)}
                            {[...Array(5 - item.rating)].map((e, i) => <i className="fa fa-star-o" key={i} />)}
                        </div>
                        <div className="pro-price">
                            {
                                item.discount > 0 ?
                                    <span className="new-price">${item.price - (item.price * item.discount / 100)} USD</span>
                                    : item.discount === 0 ?
                                        <span className="new-price">${item.price}.00 USD</span>
                                        : ''
                            }
                            {
                                item.discount > 0 ?
                                    <span className="old-price">
                                        <del>${item.price} USD</del>
                                    </span>
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <section className="our-products-tab section-tb-padding" style={{ backgroundColor: '#f1f1f1' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-title">
                                <h2>Our products</h2>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#home"
                                        >
                                            SPECIAL PRODUCTS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#profile">
                                            NEW PRODUCTS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            href="#contact"
                                        >
                                            BESTSELLER
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content pro-tab-slider">
                                <div className="tab-pane fade show active" id="home">
                                    <div className="home-pro-tab swiper-container">
                                        <div className="swiper-wrapper">
                                            {elementSpecial}
                                        </div>
                                    </div>
                                    <div className="swiper-buttons">
                                        <div className="content-buttons">
                                            <div
                                                className="swiper-button-next"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Next slide"
                                                aria-disabled="false"
                                            />
                                            <div
                                                className="swiper-button-prev swiper-button-disabled"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Previous slide"
                                                aria-disabled="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile">
                                    <div className="home-pro-tab swiper-container">
                                        <div className="swiper-wrapper">
                                            {elementNew}
                                        </div>
                                    </div>
                                    <div className="swiper-buttons">
                                        <div className="content-buttons">
                                            <div
                                                className="swiper-button-next"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Next slide"
                                                aria-disabled="false"
                                            />
                                            <div
                                                className="swiper-button-prev swiper-button-disabled"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Previous slide"
                                                aria-disabled="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact">
                                    <div className="home-pro-tab swiper-container">
                                        <div className="swiper-wrapper">
                                            {elementLunch}
                                        </div>
                                    </div>
                                    <div className="swiper-buttons">
                                        <div className="content-buttons">
                                            <div
                                                className="swiper-button-next"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Next slide"
                                                aria-disabled="false"
                                            />
                                            <div
                                                className="swiper-button-prev swiper-button-disabled"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Previous slide"
                                                aria-disabled="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product