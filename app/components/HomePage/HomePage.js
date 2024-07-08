import React from 'react'
import TopWhiteNav from '../Common/Navbar/TopWhiteNav'
import HeroSection from './HeroSection'
import WhyChoose from './WhyChoose'
import TopBrand from './TopBrand'
import PopularCategories from './PopularCategories'
import DealOfDay from './DealOfDay'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <WhyChoose/>
      <TopBrand/>
      <PopularCategories/>
      <DealOfDay/>
    </div>
  )
}

export default HomePage
