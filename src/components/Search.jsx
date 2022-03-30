import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Links from './Links';
import { useResultContext } from '../contexts/ResultContextProvider';

const Search = () => {
  const [text, setText] = useState('React For Beginners');
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div className='relative mt-3'>
      <input
        type='text'
        value={text}
        className='h-10 p-6 text-black bg-gray-200 border rounded-full shadow-sm outline-none sm:w-96 w-80 dark: hover:shadow-lg '
        placeholder='Search Voogl or type URL'
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type='button'
          className=' absolute top-1.5 right-4 text-2xl text-gray-500 '
          onClick={() => setText('')}
        >
          ✂️
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
