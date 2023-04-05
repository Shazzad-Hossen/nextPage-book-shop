import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            <div className='bg-red  min-h-[calc(100vh-120px)] flex justify-center items-center'>
           
           <div className="flex justify-center items-end"><p className='text-7xl font-thin text-[#6ca4da]'>L</p>
           <div className="border-8 p-3 border-[#0f5aa1] border-dashed rounded-full animate-spin relative bottom-1"></div>
           <p className='text-7xl font-thin text-[#6ca4da]'>ading...</p></div>
           

           
            
        </div>
        </div>
    );
};

export default LoadingSpinner;