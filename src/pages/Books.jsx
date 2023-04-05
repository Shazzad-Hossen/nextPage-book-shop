import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const Books = () => {
    const books=useLoaderData().books;
    const navigation = useNavigation();
   
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>
    
     return (
        <div className="flex justify-center"><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-28'>
           
        {
             books.map((b,i)=><Card key={i} book={b}></Card> )
        }


        
    </div></div>
    );
};

export default Books;