import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Notice from './Notice';
import ImageSlider from './ImageSlider';
import pros from './PromotionSlider';
import slides from './SliderData'
function Home() {
  const userData = JSON.parse(localStorage.getItem("userData"))
  
  return (
    <div>
      <Navbar/>
      <Notice/>
      <ImageSlider slides={slides}/>
       {console.log(userData)}
      Home hi
        <h2>{userData["msg"]}</h2>
        <h2>{userData.password}</h2>
        <h2>{userData.email}</h2>
      </div>
  )
}

export default Home