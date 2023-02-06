import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import QuickView from '../quick view/QuickView'
import vegistList from '../../api/vegist'
import {
    act_handleCart,
    act_handleProduct,
    act_handleWishList,
    act_listProducts,
    act_listProductsFilter,
    act_listProductsFilterName,
    act_listProductsFilterPrice,
    act_listProductsFilterVendor,
    act_quickViewProduct,
    act_sortProducts
} from '../../redux/actions'

const ListProducts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const vegists = useSelector(item => item.ListProducts) // lấy dữ liệu từ state

    // lấy danh sách sản phẩm từ api
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

    // danh sách sản phẩm
    const elementVegists = vegists?.map(item => {
        // lấy ra dữ liệu sản phẩm
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
            navigate('/view-cart')
        }

        return (
            <li className="grid-items" key={item.id}>
                <div className="tred-pro">
                    <div className="tr-pro-img">
                        <Link to={"/product"} onClick={handleProduct}>
                            <img
                                className="img-fluid"
                                src={item.image.map(img => img.imgpro)}
                                alt="pro-img1"
                            />
                            <img
                                className="img-fluid additional-image"
                                src={item.image.map(img => img.imghover)}
                                alt="additional"
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
                        <a href='#/' onClick={handleWishList} className="w-c-q-icn">
                            <i className="fa fa-heart" />
                        </a>
                        <a href='#/' onClick={handleCart} className="w-c-q-icn">
                            <i className="fa fa-shopping-bag" />
                        </a>
                        <a
                            href="/#"
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
                        <Link to={"/product"}>{item.name}</Link>
                    </h3>
                    <div className="rating">
                        {[...Array(item.rating)].map((e, i) => <i className="fa fa-star c-star" key={i} />)}
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
            </li>
        )
    })

    // lọc sản phẩm theo categories
    const handleFilter = (e) => {
        const id = e.target.id
        const newState = []
        if (e.target.checked) {
            vegists.map(item => {
                const newItem = item
                newItem.categories.map(item => {
                    if (item === id) {
                        newState.push(newItem)
                    }
                    return item
                })
                return item
            })
            dispatch(act_listProductsFilter(newState))
        } else {
            const gridList = async () => {
                const data = await vegistList.get('/vegist')
                const listData = data.data
                listData.map(item => {
                    const products = item.products
                    dispatch(act_listProductsFilter(products))
                    return item
                })
            }
            gridList()
        }
    }

    // lọc sản phẩm theo giá
    const handleprice = (e) => {
        const id = e.target.id
        let newState = []
        if (e.target.checked) {
            vegists.map(item => {
                if (id === "small") {
                    if (item.price < 100) {
                        newState.push(item)
                    }
                } else if (id === "medium") {
                    if (item.price > 100 && item.price < 200) {
                        newState.push(item)
                    }
                } else if (id === "hight") {
                    if (item.price > 200 && item.price < 300) {
                        newState.push(item)
                    }
                }
                return item
            })
            dispatch(act_listProductsFilterPrice(newState))
        } else {
            const gridList = async () => {
                const data = await vegistList.get('/vegist')
                const listData = data.data
                listData.map(item => {
                    const products = item.products
                    dispatch(act_listProductsFilterPrice(products))
                    return item
                })
            }
            gridList()
        }
    }

    // lọc theo tên sản phẩm
    const handleName = (e) => {
        const value = e.target.textContent
        const newState = []
        vegists.map(item => {
            if (item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                newState.push(item)
            }
            return item
        })
        dispatch(act_listProductsFilterName(newState))
    }

    // lọc theo nhà cung cấp
    const handleVendor = (e) => {
        const id = e.target.id
        let newState = []
        if (e.target.checked) {
            vegists.map(item => {
                if (id === item.vendor) {
                    newState.push(item)
                }
                return item
            })
            dispatch(act_listProductsFilterVendor(newState))
        } else {
            const gridList = async () => {
                const data = await vegistList.get('/vegist')
                const listData = data.data
                listData.map(item => {
                    const products = item.products
                    dispatch(act_listProductsFilterVendor(products))
                    return item
                })
            }
            gridList()
        }
    }

    // sắp xếp theo tên và giá
    const handleSort = (e) => {
        const value = e.target.value
        if (value === "ascname") {
            vegists.sort((a, b) => a.name > b.name ? 1 : -1)
            dispatch(act_sortProducts(vegists))
        } else if (value === "descname") {
            vegists.sort((a, b) => b.name.localeCompare(a.name))
            dispatch(act_sortProducts(vegists))
        } else if (value === "ascprice") {
            vegists.sort((a, b) => a.price > b.price ? 1 : -1)
            dispatch(act_sortProducts(vegists))
        } else if (value === "descprice") {
            vegists.sort((a, b) => a.price > b.price ? -1 : 1)
            dispatch(act_sortProducts(vegists))
        }
    }

    return (
        <div>
            {/* grid-list start */}
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="all-filter">
                                <div className="categories-page-filter">
                                    <h4 className="filter-title">Categories</h4>
                                    <a
                                        href="#category-filter"
                                        data-bs-toggle="collapse"
                                        className="filter-link"
                                    >
                                        <span>Categories</span>
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="all-option collapse" id="category-filter">
                                        <li className="grid-list-option">
                                            <input type="checkbox" id="breakfast" onClick={handleFilter} />
                                            <label htmlFor="breakfast">
                                                &nbsp;Breakfast <span className="grid-items">(8)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='dairyandchesse' onClick={handleFilter} />
                                            <label htmlFor="dairyandchesse">
                                                &nbsp;Dairy &amp; chesse <span className="grid-items">(3)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='dinner' onClick={handleFilter} />
                                            <label htmlFor="dinner">
                                                &nbsp;Dinner <span className="grid-items">(7)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='featuredproduct' onClick={handleFilter} />
                                            <label htmlFor="featuredproduct">
                                                &nbsp;Featured product <span className="grid-items">(12)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='freshfruits' onClick={handleFilter} />
                                            <label htmlFor="freshfruits">
                                                &nbsp;Fresh fruits <span className="grid-items">(6)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='freshmeat' onClick={handleFilter} />
                                            <label htmlFor="freshmeat">
                                                &nbsp;Fresh meat <span className="grid-items">(2)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='freshvegetable' onClick={handleFilter} />
                                            <label htmlFor="freshvegetable">
                                                &nbsp;Fresh vegetable <span className="grid-items">(5)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='lunch' onClick={handleFilter} />
                                            <label htmlFor="lunch">
                                                &nbsp;Lunch <span className="grid-items">(9)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='newproduct' onClick={handleFilter} />
                                            <label htmlFor="newproduct">
                                                &nbsp;New product <span className="grid-items">(7)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='organicdryfruit' onClick={handleFilter} />
                                            <label htmlFor="organicdryfruit">
                                                &nbsp;Organic dryfruit <span className="grid-items">(1)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='organicjuice' onClick={handleFilter} />
                                            <label htmlFor="organicjuice">
                                                &nbsp;Organic juice <span className="grid-items">(2)</span>
                                            </label>
                                        </li>
                                        <li className="grid-list-option">
                                            <input type="checkbox" id='seaandfish' onClick={handleFilter} />
                                            <label htmlFor="seaandfish">
                                                &nbsp;Sea &amp; fish <span className="grid-items">(2)</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="price-filter">
                                    <h4 className="filter-title">Filter by price</h4>
                                    <a
                                        href="#price-filter"
                                        data-bs-toggle="collapse"
                                        className="filter-link"
                                    >
                                        <span>Filter by price</span>
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="all-price collapse" id="price-filter">
                                        <li className="f-price">
                                            <input type="checkbox" onClick={handleprice} id='small' />
                                            <label htmlFor='small'>0-100</label>
                                        </li>
                                        <li className="f-price">
                                            <input type="checkbox" onClick={handleprice} id='medium' />
                                            <label htmlFor='medium'>100-200</label>
                                        </li>
                                        <li className="f-price">
                                            <input type="checkbox" onClick={handleprice} id='hight' />
                                            <label htmlFor='hight'>200-300</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter-tag">
                                    <h4 className="filter-title">Filter by tags</h4>
                                    <a
                                        href="#tags-filter"
                                        data-bs-toggle="collapse"
                                        className="filter-link"
                                    >
                                        <span>Filter by tags</span>
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="all-tag collapse" id="tags-filter">
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Almod</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Banana</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Coconet</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Guava</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>juice</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Litchi</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Carrot</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Mussel</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Onion</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Organic-food</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Potato</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Shrimp</a>
                                        </li>
                                        <li className="tag">
                                            <a href="#/" onClick={handleName}>Tomato</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vendor-filter">
                                    <h4 className="filter-title">Filter by vendor</h4>
                                    <a
                                        href="#vendor"
                                        data-bs-toggle="collapse"
                                        className="filter-link"
                                    >
                                        <span>Filter by vendor</span>
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="all-vendor collapse" id="vendor">
                                        <li className="f-vendor">
                                            <input type="checkbox" id='Fargglad' onClick={handleVendor} />
                                            <label htmlFor='Fargglad'>Fargglad</label>
                                        </li>
                                        <li className="f-vendor">
                                            <input type="checkbox" id='Flisat' onClick={handleVendor} />
                                            <label htmlFor='Flisat'>Flisat</label>
                                        </li>
                                        <li className="f-vendor">
                                            <input type="checkbox" id='Kyrre' onClick={handleVendor} />
                                            <label htmlFor='Kyrre'>Kyrre</label>
                                        </li>
                                        <li className="f-vendor">
                                            <input type="checkbox" id='Lustigt' onClick={handleVendor} />
                                            <label htmlFor='Lustigt'>Lustigt</label>
                                        </li>
                                        <li className="f-vendor">
                                            <input type="checkbox" id='Sundvik' onClick={handleVendor} />
                                            <label htmlFor='Sundvik'>Sundvik</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter-banner">
                                    <a href="grid-list.html" className="grid-banner">
                                        <img
                                            src="image/grid-banner.jpg"
                                            className="img-fluid"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div
                                className="grid-list-banner"
                                style={{ backgroundImage: "url(image/slider17.jpg)" }}
                            >
                                <div className="grid-banner-content">
                                    <h4>Bestseller</h4>
                                    <p>
                                        Praesent dapibus, neque id cursus Ucibus, tortor neque egestas
                                        augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                                        Nam dui mi, tincidunt quis, facilisis luc...
                                    </p>
                                </div>
                            </div>
                            <div className="grid-list-area">
                                <div className="grid-list-select">
                                    <ul className="grid-list">
                                        <li className="colloction-icn">
                                            <a href="#/">
                                                <i className="ti-layout-list-thumb" />
                                            </a>
                                        </li>
                                        <li className="colloction-icn">
                                            <a href="#/">
                                                <i className="ti-layout-grid2" />
                                            </a>
                                        </li>
                                        <li className="colloction-icn three-grid">
                                            <a href="#/" className="active">
                                                <i className="ti-layout-grid3" />
                                            </a>
                                        </li>
                                        <li className="colloction-icn four-grid">
                                            <a href="#/">
                                                <i className="ti-layout-grid4" />
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="grid-list-selector">
                                        <li>
                                            <label>Sort by</label>
                                            <select onChange={handleSort}>
                                                <option>Featured</option>
                                                <option value='ascname'>Alphabetically,A-Z</option>
                                                <option value='descname'>Alphabetically,Z-A</option>
                                                <option value='ascprice'>Price, low to high</option>
                                                <option value='descprice'>Price, high to low</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grid-pro">
                                    <ul className="grid-product">
                                        {elementVegists}
                                    </ul>
                                </div>
                            </div>
                            <div className="list-all-page">
                                <span className="page-title">Showing 1 - 24 of 23 result</span>
                                <div className="page-number">
                                    <a href='#/' className="active">
                                        1
                                    </a>
                                    <a href='#/'>2</a>
                                    <a href='#/'>3</a>
                                    <a href='#/'>4</a>
                                    <a href="/#">
                                        <i className="fa fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* grid-list start */}
            {/* quick view start */}
            <QuickView />
            {/* quick view end */}
        </div>
    )
}

export default ListProducts