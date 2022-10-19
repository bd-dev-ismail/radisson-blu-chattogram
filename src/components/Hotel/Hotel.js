import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hotel = ({hotel}) => {
    const {name, title, image, dsc} = hotel;
    const navigate = useNavigate();
    const bookNow = ()=>{
        navigate('/booking')
    }
    return (
      <div>
        <div className="card card-compact h-[480px] w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">{name}</h2>
            <p>{title}</p>
            <p>{dsc}</p>
            <div className="card-actions justify-end">
              <button onClick={bookNow} className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hotel;