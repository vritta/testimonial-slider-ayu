import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
  let name = props.data.name;
  let job = props.data.job;
  let image = props.data.image;
  let text = props.data.text;

  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] mx-auto z-[20]'>
        <img className="aspect-square rounded-full w-[140px] h-[140px]"
        src={image} alt="" />
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full
        absolute top-[-6px] left-[10px] z-[-10]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{name}</p>
        <p className='text-violet-300 uppercase text-sm'>{job}</p>
      </div>

      <div className='text-violet-500 mt-5 mx-auto'>
        <FaQuoteLeft/>
      </div>
      <div className='text-center mt-4 text-slate-500'>
        <p>{text}</p>
      </div>
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
    </div>
  )
}

export default Card
