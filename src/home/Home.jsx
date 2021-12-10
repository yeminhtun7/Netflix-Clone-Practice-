import React from 'react'
import '@home/home.css'
import {Navbar} from '@component/'
import {Featured} from '@component/'
import {List} from '@component/'
function Home() {
    return (
        <div className = "home" >
            <Navbar/>
            <Featured type="movie" />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
