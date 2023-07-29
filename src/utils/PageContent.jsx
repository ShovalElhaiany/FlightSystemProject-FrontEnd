import Logo from '../components/bases/Logo.jsx';
import TopNav from '../components/bases/TopNav.jsx';
import SideNav from '../components/bases/SideNav.jsx';
import Ad from '../components/bases/Ad.jsx';
import Footer from '../components/bases/Footer.jsx';
import React from 'react';

const PageContent = ({ container, baseComponents }) => {
  const components = {
    'logo': <Logo />,
    'top_navbar': <TopNav />,
    'side_navbar': <SideNav />,
    'ad': <Ad />,
    'footer': <Footer />
  };

  return (
    <>
      <video autoPlay loop muted src="./videos/backgroundViseo.mp4" className="background-video"></video>
      <div className='background-filter'></div>
      {container}
      {Object.entries(baseComponents).map(([component, display]) => (
        display && components[component]
      ))}
    </>
  );
};

export default PageContent;
