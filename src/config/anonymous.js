import Home from '../components/anonymous/Home'
import Login from '../components/anonymous/Login'
import Registration from '../components/anonymous/Registration'

const AnonymousOptions = {
    Home: {
        url: '/Home',
        container: <Home/>,
        tableSettings: {
            title: [],
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
        }
    },
    Login: {
        url: '/Login',
        container: <Login/>,
        tableSettings: {
            title: [],
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
        apis: {
            apiArray: 'AnonymousAPIs',
            loginApi: 'login'
        }
    },
    Registration: {
        url: '/Registration',
        container: <Registration/>,
        tableSettings: {
            title: [],
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
        apis: {
            apiArray: 'AnonymousAPIs',
            Registration: 'addCustomer'
        }
    },
    FlightsTable: {
        url: '/FlightsTable',
        tableSettings: {
            title: 'FlightsTable',
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
        apis: {
            apiArray: 'BaseAPIs',
            getApi: 'getAllFlights',
            searchApi: ['getFlightById', 'getFlightsByParameters']
        }
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
            allowAdd: false,
            allowUpdate: false,
            allowDelete: false,
            filterById: false,
            filterByParameters: []
        },
    },
    AirlinesTable: {
        url: '/AirlinesTable',
        tableSettings: {
            title: 'AirlinesTable',
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
        apis: {
            apiArray: 'BaseAPIs',
            gethApi: 'getAllAirlines',
            searchApi: ['getAirlineById', 'getAirlineByParameters']
        }
    },
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
            allowUpdate: false,
            allowDelete: false,
            filterById: false,
            filterByParameters: []
        }
    },
    CountriesTable: {
        url: '/CountriesTable',
        tableSettings: {
            title: 'CountriesTable',
            image: [],
            subjects: [],
            details: [],
            singular: true,
            allowGet: true,
            allowAdd: false,
            allowUpdate: false,
            allowDelete: false,
            filterById: true,
            filterByParameters: []
        },
        apis: {
            apiArray: 'BaseAPIs',
            getApi: 'getAllCountries',
            searchApi: ['getCountryById']
        }
    },
    CountryDetails: {
        url: '/CountryDetails',
        tableSettings: {
            title: 'CountryDetails',
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
        }
    },
    TicketsTable: {
        url: '/TicketsTable',
        tableSettings:{
            title: 'TicketsTable',
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
        }
    },
    TicketDetails: {
        url: '/TicketDetails',
        tableSettings:{
            title: 'TicketDetails',
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
        }
    }
}

export default AnonymousOptions;