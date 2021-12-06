import React from 'react'
import "./featured.css"
import { PlayArrow, Notifications, Search, InfoOutlined } from '../../../node_modules/@material-ui/icons/index'
function featured({type}) {
    return (
        <div className="featured" >
            {
                type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                                <option>Genre</option>
                                <option value="adventure">Adventure</option>
                                <option value="comedy">Comedy</option>
                                <option value="crime">Crime</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="historical">Historical</option>
                                <option value="horror">Horror</option>
                                <option value="romance">Romance</option>
                                <option value="sci-fi">Sci-fi</option>
                                <option value="thriller">Thriller</option>
                                <option value="western">Western</option>
                                <option value="animation">Animation</option>
                                <option value="drama">Drama</option>
                                <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )
            }
            <img src = "/images/homebg.jpg" alt = "" />
            <div className = "info" >
            <img src = "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXM1JBtWw1tKw2Zr929p4IeSp-oj82_Bqa0Q4B3LOpvckX_Yx0nRwcl1B7WkOlMoxwy5LE_M1wAf8z38g80L6V_GsemeUKLsUSij-XTZfhkf0li4dirplWXNKg-j4LfVVtFVEWp263o_WNGxuisMSodR8ZI-Xsdyys81SXbvsJY0.webp?r=05d" alt= "" />
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ratione distinctio corporis ipsam reprehenderit autem suscipit fugiat ipsa, exercitationem, qui, dolores beatae culpa at porro excepturi vero voluptates molestias animi!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
            </div>
        </div>
    )
}

export default featured
