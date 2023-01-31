import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import WelcomeSection from '../../Components/WelcomeSection/WelcomeSection'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <WelcomeSection/>
            <Footer/>
        </div>
    )
}

export default Home