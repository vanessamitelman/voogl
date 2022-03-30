import React from 'react'

const NewsResults = ({results}) => {
  return (
    <div className='flex flex-wrap justify-around space-y-6'>
    {results?.map(({ links, id, source, title }, i) => {
      return (
        <div key={i} className='w-full md:w-2/5'>
          <a
            href={links?.[0].href}
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            <p className='text-lg text-blue-700 dark:text-blue-300'>
              {title}
            </p>
          </a>
          <div className='flex gap-4'>
            <a href={source?.href} target='_blank' rel='noreferrer'>
              {source?.href}
            </a>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default NewsResults
