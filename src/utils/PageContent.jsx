import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ad from '../components/base/Ad.jsx';
import Footer from '../components/base/Footer.jsx';
import Logo from '../components/base/Logo.jsx';
import SideNav from '../components/base/SideNav.jsx';
import TopNav from '../components/base/TopNav.jsx';
import GenericReceiver from '../components/table/GenericReceiver.jsx';
import containers from '../config/Containers.js';

const PageContent = ({ container, baseComponents }) => {
  const containerData = containers[container];
  const components = {
    'logo': <Logo />,
    'top_navbar': <TopNav />,
    'side_navbar': <SideNav />,
    'ad': <Ad />,
    'footer': <Footer />
  };

  return (
    <>
      <video autoPlay loop muted src="./videos/backgroundVideo.mp4" className="background-video"></video>
      <div className='background-filter'></div>
      <Routes>
        {Object.entries(containerData).map(([key, value]) => (
          <Route
            key={key}
            path={value.url + '/*'}
            element={<GenericReceiver containerKey={value} />} />
        ))}
      </Routes>
      {Object.entries(baseComponents).map(([component, display]) => (
        display && components[component]
      ))}
    </>
  );
};

export default PageContent;
