import React from 'react';
import Lottie from "lottie-react";
import readingAnim from '../asset/readinAnim.json';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
    const navigation=useNavigation()
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>
    
    return (
        <div className='min-h-[calc(100vh-120px)] flex justify-between items-center flex-col-reverse sm:flex-row px-2'>
            <div className=" max-w-[500px]">
                <span className=' bg-yellow-400 px-2 rounded-xl text-xs'>ON SALE!</span>
                <p className='text-4xl font-bold py-3 '>A reader lives a <br />
                thousand lives <span className='text-[#6ca4da]'>before he dies</span> </p>
                <p className='text-justify'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>

                <div className=" py-8 inline-flex gap-4 items-center">
                    <Link to='/books'><button className='bg-[#6ca4da] p-3 text-white font-bold inline-flex gap-2 rounded-md'>Visit Store  <ShoppingCartIcon className='w-[25px]' /> </button></Link>
                    <Link to='/about'><button className='font-semibold'>Learn More</button></Link>
                </div>
            </div>


            <Lottie className='max-w-[500px]' animationData={readingAnim} loop={true} />


            

        </div>
    );
};

export default Home;