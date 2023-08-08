
const pages = {
    AnonymousPage: {
        settings: {
            url: '/',
            authenticated: false,
        },
        content: {
            container: 'AnonymousContainer',
            logo: true,
            top_navbar: true,
            side_navbar: true,
            ad: true,
            footer: true
        }
    },
    CustomerPage: {
        settings: {
            url: '/customer',
            authenticated: true,
        },
        content: {
            container: 'CustomerContainer',
            logo: false,
            top_navbar: false,
            side_navbar: false,
            ad: false,
            footer: false
        }
    },
    AirlinePage: {
        settings: {
            url: '/airline',
            authenticated: true,
        },
        content: {
            container: 'AirlineContainer',
            logo: true,
            top_navbar: true,
            side_navbar: true,
            ad: true,
            footer: true
        }
    },
    AdminPage: {
        settings: {
            url: '/admin',
            authenticated: true,
        },
        content: {
            container: 'AdminContainer',
            logo: true,
            top_navbar: true,
            side_navbar: true,
            ad: true,
            footer: true
        }
    }
};

export default pages;