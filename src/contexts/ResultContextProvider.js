import React, { createContext, useContext, useState, useEffect } from 'react';
import { searchApi } from '../services/searchApi';
const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('JS Mastery');

  const getResults = async (type) => {
    setIsLoading(true);
    const data = await searchApi(type);

    if (type.includes('/news')) {
      setResults(data.entries);
    } else if (type.includes('/image')) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    setIsLoading(false);
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
