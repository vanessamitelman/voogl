import React from 'react'

const ImageResults = ({results}) => {
  return (
    <div className='flex flex-wrap justify-center'>
    {results?.map(({ image: { src }, link: { href, title } }, i) => (
      <div key={i} className='w-screen p-2 lg:w-1/4 md:w-1/2 sm:w-full'>
        <a
          href={href}
          target='_blank'
          rel='noreferrer'
          className='flex flex-col justify-between w-full h-full p-5 border border-gray-400 rounded shadow sm:p-3 dark:border-gray-200'
        >
          <img
            src={src}
            alt={title}
            loading='lazy'
            className='w-full max-h-40'
          />
          <p className='mt-2 break-words text-small'>{title}</p>
        </a>
      </div>
    ))}
  </div>
  )
}

export default ImageResults
