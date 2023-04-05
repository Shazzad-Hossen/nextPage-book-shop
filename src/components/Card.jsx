import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({book}) => {
    const {image,title,subtitle,price,isbn13}=book;
    return (
        <Link to={`../details/${isbn13}`}>
            <div className=" w-[300px] relative transition duration-500 transform hover:-translate-y-2">
            <div className=' shadow-lg rounded-lg'>
        <img src={image} alt="" />
        
    </div>
    <div className=" absolute bg-black bg-opacity-70 opacity-0 hover:opacity-100 text-white rounded-lg p-4 object-cover inset-0 justify-between flex flex-col">
        

<p className='font-bold'>{title}</p>
<p className='text-[#dfdfdf]'>{subtitle}</p>
<p className='text-[#dfdfdf] '>{price}</p>



    </div>
        </div>

        </Link>
    );
};

export default Card;