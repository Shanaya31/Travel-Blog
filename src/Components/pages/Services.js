import React from 'react';
import CardItem from 'C:/Components/CardItem';
import Footer from 'C:/Footer';

import 'C:/App.css';
import 'C:/Cards.css';
import 'C:/Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="Paragliding.jpg"
              text="Paraglide through the skies while enjoying a paramount view"
              label="Adventure"
              path="C:\Users\SHANAYA\travelwebsite\public\images\Paragliding.jpg"
            ></CardItem>
            <CardItem 
              src="Bali.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="C:\Users\SHANAYA\travelwebsite\public\images"
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
              path="Users/SHANAYA/travelwebsite/public/images"
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
      </section>

      <section className='heading'>
        <h2>Explore these destinations</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="Budapest.jpg"
              text="Budapest, Hungary"
              label="Europe"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
            <CardItem 
              src="Lisbon.jpg"
              text="Lisbon, Portugal"
              label="Europe"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
            <CardItem 
              src="Berlin.jpg"
              text="Berlin, Germany"
              label="Europe"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
            <CardItem 
              src="London.jpg"
              text="London, England"
              label="Europe"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
            <CardItem 
              src="Delft.jpg"
              text="Delft, Holland"
              label="Europe"
              path="Users/SHANAYA/travelwebsite/public/images"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}