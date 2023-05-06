import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import Styles from "../../Styles/home/Home.module.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className={Styles.homeContainer}>
            <Featured/>
            <h1 className={Styles.homeTitle}>Browse by property types</h1>
            <PropertyList/>
            {/* <h1 className={Styles.homeTitle}>Home guests love</h1> */}
            {/* <FeaturedProperties/> */}
            <MailList/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home