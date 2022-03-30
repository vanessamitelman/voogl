import React from 'react';
import noresult from '../assets/noresult.svg';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-5 mb-5'>
      <h1 className='mt-3 mb-10 text-2xl'>ERROR 404</h1>
      <img alt='404 PAGE' src={noresult} />
      <div className='mt-3 text-2xl'>PAGE NOT FOUND</div>
    </div>
  );
};

export default NotFound;
