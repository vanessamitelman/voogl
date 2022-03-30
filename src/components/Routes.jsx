import React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import Results from '../components/Results';
import NotFound from './NotFound'
const Routes = () => {
  return (
    <div className='p-4 '>
      <Router>
        <Route path='/' element={<Navigate to='/search' replace />} />
        {['/search', '/image', '/news', '/video'].map((path, i) => (
          <Route path={path} element={<Results />} key={i} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Router>
    </div>
  );
};

export default Routes;
