import React from 'react'

const BackToTop = () => {
    return (
        <div>
            <a href="/#" className="scroll" id="top">
                <span>
                    <i className="fa fa-angle-double-up" />
                </span>
            </a>
            <div className="mm-fullscreen-bg"></div>
        </div>
    )
}

export default BackToTop