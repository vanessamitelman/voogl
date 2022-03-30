import React from 'react';
import {Puff} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex items-center justify-center '>
      <Puff  color="#00BFFF" height={250} width={80}/>
    </div>
  );
};

export default Loading;
