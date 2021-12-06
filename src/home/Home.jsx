import React from 'react'
import '@home/home.css'
import {Navbar} from '@component/'
import {Featured} from '@component/'
function Home() {
    return (
        <div className = "home" >
            <Navbar/>
            <Featured type="movie" />
        </div>
    )
}

export default Home
