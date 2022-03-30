import React, { useEffect, useState } from'react';
import { useLocation } from'react-router-dom';
import ReactPlayer from'react-player';
import { useResultContext } from'../contexts/ResultContextProvider';
import Loading from'./Loading';
import noresult from'../assets/noresult.svg';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  const [path, setPath] = useState(location.path);
  useEffect(() => {
    setPath(location.pathname);
    if (searchTerm) {
      getResults(`${location.pathname}/q=${searchTerm}&num=10`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  } else if (results.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center mt-5 mb-5'>
        <img alt='no result' src={noresult} />
        <div className='mt-3 text-2xl'>No results Found</div>
      </div>
    );
  } else {
    switch (path) {
      case'/search':
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
        );
        break;
      case'/news':
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
        );
        break;
      case'/image':
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
        );
        break;
      case'/video':
        return (
          <div className='flex flex-wrap justify-center'>
            {results?.map((video, i) => {
              if (
                !(
                  video.additional_links?.[0].href.includes('channel') ||
                  video.additional_links?.[0].href.includes('playlist')
                )
              ) {
                return (
                  <div key={i} className='p-2'>
                    <ReactPlayer
                      url={video.additional_links?.[0].href}
                      controls
                      width='100%'
                      height='100%'
                    />
                  </div>
                );
              }
            })}
          </div>
        );
        break;
      default:
        return'ERROR!';
    }
  }
};

export default Results;
