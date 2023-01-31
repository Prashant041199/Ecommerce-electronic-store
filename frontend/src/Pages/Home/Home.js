// import React, { useEffect } from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import WelcomeSection from '../../Components/WelcomeSection/WelcomeSection'
import Services from '../../Components/ServicesSection/Services'
import Features from '../../Components/FeaturesSection/Features'
import Trust from '../../Components/TrustSection/Trust'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop'
import Newsletter from '../../Components/Newsletter/Newsletter'

const Home = () => {

    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <WelcomeSection />
            <Services />
            <Features />
            <Trust />
            <Newsletter/>
            <Footer />
        </div>
    )
}

export default Home