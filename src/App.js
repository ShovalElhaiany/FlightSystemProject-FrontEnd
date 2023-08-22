import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/anonymous/PageNotFound';
import { components, pages } from './config/Pages';
import PageContent from './utils/PageContent.jsx';

function getPage(page) {
  const pageData = pages[page];

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
    if (pageData.settings.table) {
      return (
        <PageContent containerKey={container} baseComponents={baseComponents} />
      );
    }
  } else {
    return (
      <PageNotFound />
    );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(pages).map((page) => (
          <Route
            key={page}
            path={pages[page].settings.url + '/*'}
            element={getPage(page)}
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