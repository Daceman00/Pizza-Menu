import React from 'react'
import "../index.css"
import Order from './Order';

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    /* if(isOpen){
        alert("We're currently open!");
    }else{
        alert("We're currently closed!");
    } */


  return (
    <footer className='footer'>
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (<p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>)}
    </footer>
  )
}

export default Footer