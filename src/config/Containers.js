import AnonymousOptions from './Anonymous';

const containers = {

    CustomerContainer: {
        AnonymousOptions,
        CustomerDetails: {
            url: '/CustomerDetails',
            tableSettings: {
                title: 'CustomerDetails',
                image: [],
                subjects: [],
                details: [],
                singular: true,
                allowGet: true,
                allowAdd: true,
                allowUpdate: true,
                allowDelete: true,
                filterById: true,
                filterByParameters: []
            },
            apis: {
                get: {
                    method: 'GET',
                    url: '/get/countries',
                    id: false,
                    data: false
                },
                add: {
                    method: 'POST',
                    url: '/add/add_countries',
                    id: false,
                    data: true
                },
                update:{
                    method: 'PUT',
                    url: '/update/countries',
                    id: true,
                    data: true
                }
            }
        },
        MyTicketsTable: {
            url: '/MyTicketsTable',
            tableSettings: {
                title: 'MyTicketsTable',
                image: [],
                subjects: [],
                details: [],
                singular: true,
                allowGet: true,
                allowAdd: false,
                allowUpdate: false,
                allowDelete: true,
                filterById: false,
                filterByParameters: []
            },
            apis: {
                apiArray: 'CustomerAPIs',
                getApi: AnonymousOptions.FlightsTable.apis.getApi,
                addApi: 'addTicket',
                updateApi: null,
                deleteApi: 'removeTicket',
                searchApi: 'getMyTickets'
            }
        }
    },
    AirlineContainer: {
        AnonymousOptions,
        AirlineDetails: {
            url: '/AirlineDetails',
            tableSettings: {
                title: 'AirlineDetails',
                image: [],
                subjects: [],
                details: [],
                singular: true,
                allowGet: true,
                allowAdd: false,
                allowUpdate: true,
                allowDelete: false,
                filterById: false,
                filterByParameters: []
            },
            // apis: {
            //     apiArray: 'AirlineAPIs',
            //     getApi: AnonymousOptions.AirlineDetails.apis.getApi,
            //     addApi: null,
            //     updateApi: 'updateAirline',
            //     deleteApi: null,
            //     searchApi:null
            // }
        },
        FlightsTable: {
            url: '/FlightsTable',
            tableSettings: {
                title: 'FlightsTable',
                image: [],
                subjects: [],
                details: [],
                singular: false,
                allowGet: true,
                allowAdd: true,
                allowUpdate: false,
                allowDelete: true,
                filterById: true,
                filterByParameters: []
            },
            // apis: {
            //     apiArray: 'AirlineAPIs',
            //     getApi: AnonymousOptions.FlightsTable.apis.getApi,
            //     addApi: 'addFlight',
            //     updateApi: null,
            //     deleteApi: 'removeFlight',
            //     searchApi: 'getMyFlights'
            // }
        },
        FlightDetails: {
            url: '/FlightDetails',
            tableSettings: {
                title: 'FlightDetails',
                image: [],
                subjects: [],
                details: [],
                singular: true,
                allowGet: true,
                allowAdd: true,
                allowUpdate: true,
                allowDelete: true,
                filterById: false,
                filterByParameters: []
            },
            // apis: {
            //     apiArray: 'AirlineAPIs',
            //     getApi: AnonymousOptions.FlightDetails.apis.getApi,
            //     addApi: null,
            //     updateApi: 'updateAirline',
            //     deleteApi: null,
            //     searchApi: null
            // }
        }
    },
    AdminContainer: {
        AnonymousOptions,
        CustomersTable: {
            url: '/CustomersTable',
            tableSettings: {
                title: 'CustomersTable',
                image: [],
                subjects: [],
                details: [],
                singular: true,
                allowGet: true,
                allowAdd: false,
                allowUpdate: false,
                allowDelete: false,
                filterById: false,
                filterByParameters: []
            },
            // apis: {
            //     apiArray: 'AdministratorAPIs',
            //     getApi: 'getAllCustomers',
            //     addApi: null,
            //     updateApi: null,
            //     deleteApi: 'removeCustomer',
            //     searchApi: null
            // }
        },
        AirlinesTable: {
            url: '/AirlinesTable',
            tableSettings: {
                title: 'AirlinesTable',
                image: [],
                subjects: [],
                details: [],
                singular: false,
                allowGet: true,
                allowAdd: true,
                allowUpdate: false,
                allowDelete: true,
                filterById: false,
                filterByParameters: []
            },
            // apis: {
            //     apiArray: 'AdministratorAPIs',
            //     getApi: AnonymousOptions.AirlinesTable.apis.getApi,
            //     addApi: 'addAirline',
            //     updateApi: null,
            //     deleteApi: 'removeAirline',
            //     searchApi: null
            // }
        },
        AdministratorTable: {
            url: '/AdministratorTable',
            tableSettings: {
                title: 'AdministratorTable',
                image: [],
                subjects: [],
                details: [],
                singular: true,
                allowGet: true,
                allowAdd: false,
                allowUpdate: false,
                allowDelete: false,
                filterById: false,
                filterByParameters: []
            },
            // apis: {
            //     apiArray: 'AdministratorAPIs',
            //     getApi: null,
            //     addApi: 'addAdministrator',
            //     updateApi: null,
            //     deleteApi: 'removeAdministrator',
            //     searchApi: null
            // }
        }
    }
}

export default containers;