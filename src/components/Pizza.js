import React from 'react'
import "../index.css"

const Pizza = ({pizzaData}) => {

  console.log(pizzaData)

  //if(pizzaData.soldOut) return null

  return (
    <>
      {pizzaData.map((pizza) => (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`} key={pizza.name}>
        <div>
          <img src={pizza.photoName} alt={pizza.photoName}></img>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
        </div>
        </li>
      ))}
    </>
  )
}

export default Pizza