import React from 'react'
import Banner from '../../Components/Home/HomeBanner/Banner'
import OffOnBrands from '../../Components/Home/OffOnBrands/OffOnBrands'
import Discounts from '../../Components/Home/Discounts/Discounts'
import ShopByCategory from '../../Components/Home/ShopByCategory/ShopByCategory'


function Home() {
    return (
        <div className='w-[85%] mx-auto'>
            <Banner/>
            <OffOnBrands/>
            <Discounts/>
            <ShopByCategory/>
        </div>
    )
}

export default Home
