import React from 'react'
import Card from './Card'
import reviews from '../data';
// async function fetchDataHandler(){
//     let data = await fetch("")
// }
// let data = reviews;
const Testimonials = () => {
  return (
    <div>
      {
        reviews.map((review)=><Card data={review}/>)
      }
    </div>
  )
}

export default Testimonials
