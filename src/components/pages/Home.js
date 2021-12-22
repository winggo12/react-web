import React from 'react'
//Using "imr" to import react instantly
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from './Cards';
import Footer from '../Footer'

function Home() {

    return(
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;