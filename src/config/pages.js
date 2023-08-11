const commonContent = {
    logo: true,
    top_navbar: true,
    side_navbar: true,
    ad: true,
    footer: true
  };
  
  const pageConfig = (url, authenticated, container, customContent = {}) => {
    const content = { container, ...commonContent, ...customContent };
    return {
      settings: { url, authenticated },
      content
    };
  };
  
  const pages = {
    AnonymousPage: pageConfig('/', false, 'AnonymousContainer'),
    CustomerPage: pageConfig('/customer', true, 'CustomerContainer'),
    AirlinePage: pageConfig('/airline', true, 'AirlineContainer'),
    AdminPage: pageConfig('/admin', true, 'AdminContainer')
  };
  
  export default pages;
  