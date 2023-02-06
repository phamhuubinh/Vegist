import React from 'react'
import LeftBlog from './LeftBlog'
import RightBlog from './RightBlog'

const Blogs = () => {
    return (
        <div>
            <section className="section-tb-padding blog-page">
                <div className="container">
                    <div className="row">
                        {/* left blog start */}
                        <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                            <LeftBlog />
                        </div>
                        {/* left blog end */}
                        {/* right blog start */}
                        <div className="col-xl-9 col-lg-8 col-md-7 col-12">
                            <RightBlog />
                        </div>
                        {/* right blog end */}
                    </div>
                    <div className="all-page">
                        <span className="page-title">Showing 1 - 5 of 6 result</span>
                        <div className="page-number style-1">
                            <a href="/#" className="active">
                                1
                            </a>
                            <a href="/#">2</a>
                            <a href="/#">3</a>
                            <a href="/#">4</a>
                            <a href="/#">5</a>
                            <a href="/#">
                                <i className="fa fa-angle-double-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs;