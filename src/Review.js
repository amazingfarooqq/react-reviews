import React, { useState } from 'react'
import reviews from './data';

const Review = () => {

  const [index, setIndex] = useState(0)

  console.log(reviews);
  return (
    <div className='card'>
      <div className="card-img">
       
          <img className='img' src={reviews[index].image} alt="" />

      </div>

      <div className="card-body">
        <div className="name">{reviews[index].name}</div>
        <div className="job">{reviews[index].job}</div>
        <div className="text">{reviews[index].text}</div>
      </div>

      <div className='buttons'>
        <button className='btn'
          onClick={() => index <= 0 ? setIndex(reviews.length - 1) : setIndex(index - 1)}
        >back</button>

        <button className='btn'
          onClick={() => index >= reviews.length - 1 ? setIndex(0) : setIndex(index + 1)}
        >next</button> <br />

        <button className='btn'
          onClick={() => setIndex(Math.floor(Math.random() * reviews.length)) }
        >Random</button>

      </div>
    </div>
  )
}

export default Review;
