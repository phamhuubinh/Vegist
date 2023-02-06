import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import vegistList from '../../api/vegist'
import { act_handleCart, act_handleProduct, act_handleWishList, act_listProducts, act_quickViewProduct } from '../../redux/actions'

const TrendingProducts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const vegists = useSelector(item => item.ListProducts) // lấy danh sách sản phẩm từ state

    // lấy danh sách sản phẩm từ api và chuyển vào redux
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

    // mảng danh sách sản phẩm xu hướng
    const trendProduct = []
    vegists?.map(item => {
        const newItem = item
        newItem.categories.map(item => {
            if (item === "trend") {
                trendProduct.push(newItem)
            }
            return item
        })
        return item
    })

    // danh sách sản phẩm xu hướng
    const elementTrend = trendProduct?.map(item => {
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

    return (
        <div>
            <section className="h-t-products1 section-t-padding section-b-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-title">
                                <h2>Trending products</h2>
                            </div>
                            <div className="home-pro-tab swiper-container">
                                <div className="swiper-wrapper">
                                    {elementTrend}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrendingProducts