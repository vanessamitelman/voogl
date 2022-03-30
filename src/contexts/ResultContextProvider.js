import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('JS Mastery');
  // '/image' '/videos' etc...
  const getResults = async (type) => {
    setIsLoading(true);
try{
const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': '004b8b5689msha5cbff8f022b1f3p1330e1jsn92e844297c2b'
      }
    });
    const data = await response.json();

    if (type.includes('/news')) {
      setResults(data.entries);
    } else if (type.includes('/image')) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }

    setIsLoading(false);

}catch(e){    console.log(e)}

  };
  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        isLoading,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
