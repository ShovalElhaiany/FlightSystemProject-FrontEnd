import AnonymousContainer from anonymous;

const basicOptions = AnonymousContainer
const containers = {

    'CustomerContainer': {
        basicOptions,
        'CustomerDetails': {
            'url': '/CustomerDetails',
            'container': <CustomerDetails/>,
            'options': {
                'get': true,
                'add': false,
                'update': true,
                'delete': false,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        },
        'MyTicketsTable': {
            'url': '/MyTicketsTable',
            'container': <MyTicketsTable/>,
            'options': {
                'get': true,
                'add': false,
                'update': false,
                'delete': true,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        }
    },
    'AirlineContainer': {
        basicOptions,
        'MyAirlinesTable': {
            'url': '/MyAirlinesTable',
            'container': <MyAirlinesTable/>,
            'options': {
                'get': true,
                'add': false,
                'update': false,
                'delete': false,
                'fliter_by_Id': true,
                'fliter_by_parameters': true
            }
        },
        'AirlineDetails': {
            'url': '/AirlineDetails',
            'container': <AirlineDetails/>,
            'options': {
                'get': true,
                'add': false,
                'update': true,
                'delete': false,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        },
        'FlightDetails': {
            'url': '/FlightDetails',
            'container': <FlightDetails/>,
            'options': {
                'get': true,
                'add': true,
                'update': true,
                'delete': true,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        }
    },
    'AdminContainer': {
        basicOptions,
        'CustomersTable': {
            'url': '/CustomersTable',
            'container': <CustomersTable/>,
            'options': {
                'get': true,
                'add': false,
                'update': false,
                'delete': false,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        },
        'CustomerDetails': {
            'url': '/CustomerDetails',
            'container': <CustomerDetails/>,
            'options': {
                'get': true,
                'add': false,
                'update': false,
                'delete': true,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        },
        'AirlineDetails': {
            'url': '/AirlineDetails',
            'container': <AirlineDetails/>,
            'options': {
                'get': true,
                'add': true,
                'update': false,
                'delete': true,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        },
        'AdministratorTable': {
            'url': '/AdministratorTable',
            'container': <AdministratorTable/>,
            'options': {
                'get': true,
                'add': false,
                'update': false,
                'delete': false,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        },
        'AdministratorDetails': {
            'url': '/AdministratorDetails',
            'container': <AdministratorDetails/>,
            'options': {
                'get': true,
                'add': true,
                'update': false,
                'delete': true,
                'fliter_by_Id': false,
                'fliter_by_parameters': false
            }
        }
    }
}

export default containers;