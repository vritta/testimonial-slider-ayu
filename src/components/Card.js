import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
  let name = props.data.name;
  let job = props.data.job;
  let image = props.data.image;
  let text = props.data.text;

  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <p>{name}</p>
      </div>

      <div>
        <p>{job}</p>
      </div>

      <div>
        <FaQuoteLeft/>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <FaQuoteRight/>
      </div>

      <div>
        <button>+</button>
        <button>+</button>
      </div>

      <div>
        <button>Surprise Me</button>
      </div>
    </div>
  )
}

export default Card
