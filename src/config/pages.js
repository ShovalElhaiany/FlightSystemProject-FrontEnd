import AnonymousContainer from '../containers/AnonymousContainer.jsx'
import CustomerContainer from '../containers/CustomerContainer.jsx'
import FlightContainer from '../containers/FlightContainer.jsx'
import AirlineContainer from '../containers/AirlineContainer.jsx'

const pages = {
    'AnonymousPage': {
        'settings': {
            'url': '/',
            'authenticated': false,
        },
        'content': {
            // 'container': <AnonymousContainer/>,
            'logo': true,
            'top_navbar': true,
            'side_navbar': true,
            'ad': true,
            'footer': true
        }
    },
    'CustomerPage': {
        'settings': {
            'url': '/customer',
            'authenticated': true,
        },
        'content': {
            // 'container': <CustomerContainer/>,
            'logo': true,
            'top_navbar': true,
            'side_navbar': true,
            'ad': true,
            'footer': true
        }
    },
    'AirlinePage': {
        'settings': {
            'url': '/airline',
            'authenticated': true,
        },
        'content': {
            // 'container': <FlightContainer/>,
            'logo': true,
            'top_navbar': true,
            'side_navbar': true,
            'ad': true,
            'footer': true
        }
    },
    'AdminPage': {
        'settings': {
            'url': '/admin',
            'authenticated': true,
        },
        'content': {
            // 'container': <AirlineContainer/>,
            'logo': true,
            'top_navbar': true,
            'side_navbar': true,
            'ad': true,
            'footer': true
        }
    }
};

export default pages;