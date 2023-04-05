import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const Details = () => {
    const [more,setMore]=useState(true);
    const data= useLoaderData();
    const {image, title, authors, publisher, year,rating, desc, price, url}=data;
    const navigation= useNavigation();
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>
    else
   
    return (
        <div className='min-h-[calc(100vh-120px)] flex justify-center items-center py-10 px-4'>

            <div className="border-2 flex  flex-col lg:flex-row pl-14 lg:pl-0 justify-between items-start py-10 pr-14">

            <img className='object-cover lg:h-[600px]' src={image} alt="" />

            <div className="max-w-[400px] pt-14">
            <span className=' bg-yellow-400 px-2 rounded-xl text-xs'>BRNAD NEW</span>
            <p className='text-4xl font-bold py-3'>{title}</p>
            <p>Authors: {authors}</p>
            <p>Publisher: {publisher}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
            
                { more? <p className='py-3 text-justify'>
                    {desc.substring(0,95)}...<button onClick={()=>setMore(!more)}>Read More</button>
                </p>  : <p className='py-3 text-justify'>
                    {desc}...<button onClick={()=>setMore(!more)}>Read Less</button>
                    </p>}

                    <div className="pt-10 inline-flex gap-12 items-center">
                    <a href={url} target='blank'><button className='bg-[#6ca4da] p-3 text-white font-bold inline-flex gap-2 rounded-md'>Buy Now</button></a> <p className='text-[#333333] font-bold text-xl'>Price: {price}</p>
                    </div>
            





            </div>
            





            </div>
            
           



        </div>
    );
};

export default Details;