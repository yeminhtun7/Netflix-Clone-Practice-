import React,{useState} from 'react'
import { ArrowDropDown, Notifications, Search } from '../../../node_modules/@material-ui/icons/index'
import './navbar.css'
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

     window.onscroll = function () {
        setIsScrolled(window.pageYOffset === 0 ? false : true);

         return function() {
             window.onscroll = null;
         }
     }     
    
    return (
        <div className = { isScrolled ? "navbar scroll" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>Alex</span>
                    <Notifications className="icon" />
                    <img
                     src = "https://envato-shoebox-0.imgix.net/f77c/b767-2e26-4348-95f8-316f918252c5/IMG_7856.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=1d198263e440b757aa6966de50d3e804"
                     alt = ""
                    />
                <div className="profile">
                < ArrowDropDown className="icon" />
                    <div className="options" >
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Navbar
