import React from 'react'

const SearchResults = ({results}) => {
  return (
    <div className='flex flex-wrap justify-around space-y-6'>
    {results?.map(({ link, title }, i) => (
      <div key={i} className='w-full md:w-2/5'>
        <a href={link} target='_blank' rel='noreferrer'>
          <p className='text-sm'>
            {link.length > 30 ? `${link.substring(0, 30)}...` : link}
          </p>
          <p className='text-lg text-blue-700 hover:underline dark:text-blue-300'>
            {title}
          </p>
        </a>
      </div>
    ))}
  </div>
  )
}

export default SearchResults
