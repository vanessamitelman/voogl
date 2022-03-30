import React from 'react'
import noresult from '../assets/noresult.svg';

const NoResults = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-5 mb-5'>
    <img alt='no result' src={noresult} />
    <div className='mt-3 text-2xl'>No results Found</div>
  </div>
  )
}

export default NoResults
