import Home from '../components/anonymous/Home';
import Login from '../components/anonymous/Login';
import Registration from '../components/anonymous/Registration';
import Ad from '../components/base/Ad.jsx';
import Footer from '../components/base/Footer.jsx';
import SideNav from '../components/base/SideNav.jsx';
import TopNav from '../components/base/TopNav.jsx';

export const components = {
  'top_navbar': <TopNav />,
  'side_navbar': <SideNav />,
  'ad': <Ad />,
  'footer': <Footer />
};

const commonContent = Object.keys(components).reduce((acc, key) => {
  acc[key] = true;
  return acc;
}, {});
  
const pageConfig = (url, authenticated, table, container, customContent = {}) => {
    const content = { container, ...commonContent, ...customContent };
    return {
      settings: { url, authenticated, table},
      content
    };
  };
  
export const pages = {
    // Not authenticated
    Home: pageConfig('/Home', false, false,  <Home/>),
    Login: pageConfig('/Login', false, false, <Login />),
    Register: pageConfig('/Registration', false, false, <Registration />),
    // Authenticated
    CustomerPage: pageConfig('/customer', true, true, 'CustomerContainer', {ad: false}),
    AirlinePage: pageConfig('/airline', true, true, 'AirlineContainer', {ad: false}),
    AdminPage: pageConfig('/admin', true, true, 'AdminContainer', {ad: false}),
    // Authenticated but not a table
    AdminRegister: pageConfig('/admin/Registration', true, false, <Registration admin={true} />),
  };
  
  export default pages ;
  