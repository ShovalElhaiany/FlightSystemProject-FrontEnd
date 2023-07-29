// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
// import PageNotFound from './components/bases/PageNotFound.jsx';
// import pages from './config/pages.js';
// import PageContent from './utils/PageContent.jsx';

// function getPage(page) {
//   const pageData = pages[page];

//   if (pageData) {
//     const { container, ...baseComponents } = pageData.content;

//     return (
//       <PageContent container={container} baseComponents={baseComponents} />
//     );
//   } else {
//     return (
//       <PageNotFound />
//     );
//   }
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {Object.keys(pages).map((page) => (
//           <Route
//             exact
//             key={page}
//             path={pages[page].settings.url}
//             element={getPage(page)}
//           />
//         ))}
//         <Route
//           path="*"
//           element={<Navigate to="/" replace />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import GetMyFlights from './utils/GetMyFlights.js'

function App() {
  return (
    < GetMyFlights />
  );
}
export default App;