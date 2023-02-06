import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section className="section-tb-padding blog1" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-title">
                                <h2>Recent news</h2>
                            </div>
                            <div className="home-blog owl-carousel owl-theme">
                                <div className="items">
                                    <div className="blog-start">
                                        <div className="blog-image">
                                            <a href="#/">
                                                <img
                                                    src="image/blog-image/blog-1.jpg"
                                                    alt="blog"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="#/">
                                                        Green onion knife and salad plased
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                doli. aenean commodo ligula eget dolor...
                                            </p>
                                            <a href="#/" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">8 Jan 2021</span>
                                                <a href="#/">6 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="blog-start">
                                        <div className="blog-image">
                                            <a href="#/">
                                                <img
                                                    src="image/blog-image/blog-2.jpg"
                                                    alt="blog"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="#/">
                                                        All time fresh every time healthy
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                doli. Aenean commodo ligula eget dolor...
                                            </p>
                                            <a href="#/" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">8 Jan 2021</span>
                                                <a href="#/">1 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="blog-start">
                                        <div className="blog-image">
                                            <a href="#/">
                                                <img
                                                    src="image/blog-image/blog-3.jpg"
                                                    alt="blog"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="#/">
                                                        Health and skin for your organic
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                doli. Aenean commodo ligula eget dolor...
                                            </p>
                                            <a href="#/" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">8 Jan 2021</span>
                                                <a href="#/">1 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="all-blog">
                                <Link to={'/blogs'} className="btn btn-style1">
                                    View all
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog;