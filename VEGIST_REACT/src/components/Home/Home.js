import React from 'react'
import Slider from './Slider'
import Banner from './Banner'
import Category from './Category'
import TrendingProducts from './TrendingProducts'
import Product from './Product'
import Testimonial from './Testimonial'
import Blog from './Blog'
import NewsLetter from './NewsLetter'
import Brand from './Brand'
import QuickView from '../quick view/QuickView'

const Home = () => {
    return (
        <>
            <Slider />
            <Banner />
            <Category />
            <TrendingProducts />
            <Product />
            <Testimonial />
            <Blog />
            <NewsLetter />
            <Brand />
            <QuickView />
        </>
    )
}

export default Home