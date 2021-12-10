import React, { useRef, useState } from 'react'
import "./list.css";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '../../../node_modules/@material-ui/icons/index'
import ListItem from 'components/listItem/ListItem';
function List() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef()
    const handleClick = (direction) => {
     
        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(listRef.current.style.transform);
        if( listRef.current.style.transform === "translateX(-230px)" ) {
            setIsMoved(false)
        }
        if(direction === "left" && slideNumber > 0 ) {

            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "right" && slideNumber < 5) {
            setIsMoved(true)
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`; 
        }
    }

    return (
        <div className='list' >
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className = "sliderArrow left" onClick = {() => handleClick("left")}
                    style = {{display : !isMoved && "none"}}
                 />
                <div className="container" ref={listRef} >
                <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>

                <ArrowForwardIosOutlined className = "sliderArrow right" onClick= {() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
