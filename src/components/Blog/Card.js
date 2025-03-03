import React from "react"
import CardData from "./CardData"
import "./Card.css"
import FashionCardData from "../Slider/FashionCardData"

const Card = () => {
  return (
    <>
      <div className='card grid top'>
        {CardData.map((value) => {
          return (
            <div className='box' key={value.id}>
              <div className='img'>
                <img src={value.cover} alt='Card Images'/>
              </div>
              <span>{value.category}</span>
              <h2>{value.title}</h2>
            </div>
          )
        })}
      </div>

      <div className='card grid top'>
        {FashionCardData.map((value) => {
          return (
            <div className='box' key={value.id}>
              <div className='img'>
                <img src={value.cover} alt='Card Images'/>
              </div>
              <span>{value.category}</span>
              <h2>{value.title}</h2>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default Card;