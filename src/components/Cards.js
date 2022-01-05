import React from 'react';
import CardItem from '../components/Carditem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>EXPLORE MORE</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg" 
                        text="See What I'm All About"
                        label="ME!"
                        path='/about-me'/>
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards
