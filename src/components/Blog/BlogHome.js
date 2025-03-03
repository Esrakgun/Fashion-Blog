import React from 'react'
import Slider from '../Slider/Slider'
import Card from './Card'
import Footer from '../Footer/Footer'
import CardTwo from './CardTwo'
import FashionCardData from '../Slider/FashionCardData'



const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titleTwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear denim Belt Bags make a Comeback",
      name: "By NARLA",
      subTitle: "How to shop Mindfully",
      qrCode: "image/qrcode.png",
      cover: "image/blog5.jpg",
    },
  ]
  return (
    <>
      <section className='home'>
        <div className='left-content'>
          {
            data.map((value) => {
              return (
                <div className='content'>
                  <div className='logo'>
                    <h1>N</h1>
                  </div>
                  <div className='home-img'>
                    <img src={value.cover}></img>
                  </div>
                  <div className='text'>
                    <h1>{value.titleOne}</h1>
                    <p>{value.paraOne}</p>
                    <span>{value.name}</span>
                  </div>
                  <div className='text text2'>
                    <h1>{value.titleTwo}</h1>
                    <p>{value.paraTwo}</p>
                    <span>{value.subTitle}</span>
                  </div>
                  <div className='qrcode'>
                    <img src={value.qrCode}></img>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='right-content'>
          <Slider/>
          <Card/>
          <CardTwo/>
          <Footer/>
     
        </div>
      </section>

    </>
  )
}

export default BlogHome;
