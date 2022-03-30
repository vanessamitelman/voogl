import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';
import NoResults from './NoResults';

import {
  SearchResults,
  NewsResults,
  VideoResults,
  ImageResults
} from './Results/';

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
    return <NoResults />;
  } else {
    switch (path) {
      case '/search':
        return <SearchResults results={results} />;
        break;
      case '/news':
        return <NewsResults results={results} />;
        break;
      case '/image':
        return <ImageResults results={results} />;
        break;
      case '/video':
        return <VideoResults results={results} />;
        break;
      default:
        return 'ERROR!';
    }
  }
};

export default Results;
