import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import PageNotFound from './components/anonymous/PageNotFound';
import { COMMON_COMPONENTS, pages } from './config/Pages.js';
import PageGenerator from './utils/PageGenerator.jsx';

const GetPage = ({ pageName }) => {
  const pageData = pages[pageName];
  const [userRole, setUserRole] = useState(sessionStorage.getItem('role'));

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("Change to local storage!"); 
      setUserRole(sessionStorage.getItem('role'));
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup on component unmount
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (pageData) {
    const { container, ...baseComponents } = pageData.content;

    if (!pageData.settings.table) {
      return (
        <>
          {container}
          {Object.entries(baseComponents).map(([component, display]) => (
            display && COMMON_COMPONENTS[component]
          ))}
        </>
      );
    }

    if (pageData.settings.table && userRole === pageData.settings.role) {
      return <PageGenerator containerKey={container} baseComponents={baseComponents} />;
    }
  }

  return <PageNotFound />;
};

function App() {
  if (!sessionStorage.getItem("role")) {
    window.sessionStorage.setItem("role", "anonymous");
  }

  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(pages).map((page) => (
          <Route
            key={page}
            path={pages[page].settings.url + '/*'}
            element={<GetPage pageName={page} />}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to="/Home" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;