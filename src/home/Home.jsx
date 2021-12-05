import React from 'react'
import '@home/home.css'
import {Navbar} from '@component/'
function Home() {
    return (
        <div className = "home" >
            <Navbar/>
            <img 
            width = "100%" 
            src = "/images/homebg.jpg" />
            <img 
            width = "100%" 
            src = "/images/homebg.jpg" />
        </div>
    )
}

export default Home
