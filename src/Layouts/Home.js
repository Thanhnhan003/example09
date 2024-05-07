import React from 'react'
import Banner from '../Pages/Home/Banner'

import Testimonial from '../Pages/Home/Testimonial'
import Blog from '../Pages/Home/Blog'
import Main from './Main'
import MenuCategoryH from '../Pages/Home/MenuCategoryTop';
import MenuCategoryV from '../Pages/Home/MenuCategorySiderbar'
import NewProducts from '../Pages/Home/NewProducts'

function Home() {
    return (
        <>
            <Banner />
            <MenuCategoryH />
            <div className="product-container">
                <div className="container">

                    <MenuCategoryV />
                    <NewProducts />
                </div>
            </div>
            <Testimonial />
            <Blog />
        </>
    )
}

export default Home
