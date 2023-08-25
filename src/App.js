import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect, useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/anonymous/PageNotFound';
import { components, pages } from './config/Pages';
import PageContent from './utils/PageContent.jsx';

function GetPage(page) {
  const pageData = pages[page];
  const [userRole, setUserRole] = useState(sessionStorage.getItem('role'))

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("Change to local storage!"); 
      setUserRole(sessionStorage.getItem('role'))
  })},[])

  if (pageData) {
    const { container, ...baseComponents } = pageData.content;

    if (!pageData.settings.table) {
      return (
        <>
        {container}
        {Object.entries(baseComponents).map(([component, display]) => (
          display && components[component]
        ))}
        </>
    )}
    if (pageData.settings.table && userRole === pageData.settings.role) {
      return (
        <PageContent containerKey={container} baseComponents={baseComponents} />
      );
    } else {
      return (
        <PageNotFound />
      );
    }
  } else {
    return (
      <PageNotFound />
    );
  }
}

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
            element={GetPage(page)}
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