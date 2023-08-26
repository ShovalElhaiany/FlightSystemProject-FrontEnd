import React from 'react';
import '../../css/anonymous/PageNotFound.css';

/**
 * PageNotFound component renders a 404 error page when a route is not matched.
 * 
 * This component is typically used in conjunction with React Router's Switch
 * to display a fallback for unmatched routes.
 */
const PageNotFound = () => (
  <div className="page-not-found">
    {/* Heading indicating a 404 error */}
    <h1>404</h1>
    
    {/* Description of the error */}
    <p>Page Not Found</p>
    <p>Oops! The page you are looking for does not exist.</p>
  </div>
);

export default PageNotFound;
