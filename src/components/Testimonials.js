import React from 'react'
import Card from './Card'
import reviews from '../data';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';

// async function fetchDataHandler(){
//     let data = await fetch("")
// }
// let data = reviews;

const Testimonials = () => {
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index===0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex((prev)=>--prev);
        }
    }
    function rightShiftHandler(){
        if(index===reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex((prev)=>++prev);
        }
    }
    function surpriseHandler(){
        setIndex(Math.floor(Math.random() * reviews.length));
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white mt-10 p-10 transition-all 
    duration-700 hover:shadow-xl rounded-md'>
      {/* {
        reviews.map((review)=><Card key={review.id} data={review}/>)
      } */}
      
      <Card data={reviews[index]}/>
      
      <div className='flex text-3xl mt-9 gap-3 font-bold justify-center text-violet-400'>
        <button onClick={leftShiftHandler} 
        className='cursor-pointer hover:text-violet-500'>
            <FiChevronLeft/>
        </button>

        <button onClick={rightShiftHandler} 
        className='cursor-pointer hover:text-violet-500'>
            <FiChevronRight/>
        </button>

      </div>

      <div className='mt-6'>
        <button onClick={surpriseHandler} 
        className='bg-violet-400 hover:bg-violet-500 text-white
        transition-all duration-200 px-10 py-2 rounded-md font-bold text-lg cursor-pointer'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
