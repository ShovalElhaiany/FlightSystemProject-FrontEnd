import Home from '../components/anonymous/Home';
import Login from '../components/anonymous/Login';
import Registration from '../components/anonymous/Registration';
import Ad from '../components/base/Ad.jsx';
import Footer from '../components/base/Footer.jsx';
import SideNav from '../components/base/SideNav.jsx';
import TopNav from '../components/base/TopNav.jsx';

export const COMMON_COMPONENTS = {
        'top_navbar': <TopNav />,
        'side_navbar': <SideNav />,
        'ad': <Ad />,
        'footer': <Footer />
};

// Extract common content from COMMON_COMPONENTS for ease of use
const commonContent = Object.keys(COMMON_COMPONENTS).reduce((acc, key) => {
  acc[key] = true;
  return acc;
}, {});

const pageConfig = (url, authenticated, table, container, role, customContent = {}) => {
    const content = { container, ...commonContent, ...customContent };
    return {
      settings: { url, authenticated, table, role},
      content
    };
};

// Enums can be useful for roles to avoid mistyping.
const ROLES = {
  ANONYMOUS: 'anonymous',
  CUSTOMER: 'customer',
  AIRLINE: 'airline',
  ADMIN: 'admin'
};

// Pages configuration for the web application
export const pages = {
    // Unauthenticated routes
    Home: pageConfig('/Home', false, false, <Home />, ROLES.ANONYMOUS),
    Login: pageConfig('/Login', false, false, <Login />, ROLES.ANONYMOUS),
    Register: pageConfig('/Registration', false, false, <Registration />, ROLES.ANONYMOUS),
    AnonymousPage: pageConfig('/anonymous', false, true, 'AnonymousContainer', ROLES.ANONYMOUS, { ad: false }),
    
    // Authenticated routes
    CustomerPage: pageConfig('/customer', true, true, 'CustomerContainer', ROLES.CUSTOMER, { ad: false }),
    AirlinePage: pageConfig('/airline', true, true, 'AirlineContainer', ROLES.AIRLINE, { ad: false }),
    AdminPage: pageConfig('/admin', true, true, 'AdminContainer', ROLES.ADMIN, { ad: false }),
    AdminRegister: pageConfig('/admin/Registration', true, false, <Registration admin={true} />, ROLES.ADMIN),
};

export default pages;
