import React from 'react'
import ProductInfo from './ProductInfo'
import ProductPage from './ProductPage'
import ReletedProduct from './ReletedProduct'

const Products = () => {
    return (
        <div>
            {/* product info start */}
            <ProductInfo />
            {/* product info end */}
            {/* product page tab start */}
            <ProductPage />
            {/* product page tab end */}
            {/* releted product start */}
            <ReletedProduct />
            {/* releted product end */}
        </div>
    )
}

export default Products