import React from 'react';
import CardItem from './Components/CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem 
              src="Paragliding.jpg"
              text="Paraglide through the skies while enjoying a paramount view"
              label="Adventure"
              path="C:\Users\SHANAYA\travelwebsite\public\images\Paragliding.jpg"
            ></CardItem>
            <CardItem 
              src="Bali"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="C:\Users\SHANAYA\travelwebsite\public\images\Bali.jpg"
            ></CardItem>
            <CardItem 
              src="Japan.jpg"
              text="Experience The culture of Japan through a guided tour"
              label="Luxury"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
            <CardItem 
              src="img-3.jpg"
              text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
              label="Mystery"
              path="C:/Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
            <CardItem 
              src="Abu Dabi.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;