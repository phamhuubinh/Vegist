import React from 'react'

const NotFound = () => {
    return (
        <div>
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="fnf-area">
                                <h1 className="fnf-title">
                                    4<span className="color-font"> 04</span>
                                </h1>
                                <p>Oops, The Page you are looking for can't be found!</p>
                                <form>
                                    <input type="text" name="text" placeholder="Search..." />
                                    <a href="grid-list.html" className="submit">
                                        <i className="fa fa-paper-plane" />
                                    </a>
                                </form>
                                <a href="index.html" className="back-home">
                                    Go to home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound