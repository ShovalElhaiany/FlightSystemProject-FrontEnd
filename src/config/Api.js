const serverApis = {

    BaseAPIs: {
        getAllFlights: {
            method: 'GET',
            url: '/get/flights',
            id: false,
            data: false
        },
        getFlightById: {
            method: 'GET',
            url: '/get/flights',
            id: true,
            data: false
        },
        getFlightsByParameters: {
            method: 'GET',
            url: '/get/flights/parameters',
            id: false,
            data: false
        },
        getAllAirlines: {
            method: 'GET',
            url: '/get/airlines',
            id: false,
            data: false
        },
        getAirlineById: {
            method: 'GET',
            url: '/get/airlines',
            id: true,
            data: false
        },
        getAirlineByParameters: {
            method: 'GET',
            url: '/get/airlines/parameters',
            id: false,
            data: false
        },
        getAllCountries: {
            method: 'GET',
            url: '/get/countries',
            id: false,
            data: false
        },
        getCountryById: {
            method: 'GET',
            url: '/get/countries',
            id: true,
            data: false
        }
    },
    AnonymousAPIs: {
        login: {
            method: 'POST',
            url: '/user/login',
            id: false,
            data: true
        },
        addCustomer: {
            method: 'POST',
            url: '/user/add_customers',
            id: false,
            data: true
        },
    },
    AirlineAPIs: {
        updateAirline:{
                method: 'PUT',
                url: '/update/airlines',
                id: true,
                data: true
        },
        addFlight:{
                method: 'POST',
                url: '/add/flights',
                id: false,
                data: true
        },
        updateFlight:{
                method: 'PUT',
                url: '/update/flights',
                id: true,
                data: true
        },
        removeFlight:{
                method: 'DELETE',
                url: '/remove/flights',
                id: true,
                data: false
        },
        getMyFlights:{
            method: 'GET',
            url: '/get/flights',
            id: true,
            data: false
        },
    },
    AdministratorAPIs: {
        getAllCustomers:{
            method: 'GET',
            url: '/get/customers',
            id: false,
            data: false
        },
        addAirline:{
            method: 'POST',
            url: '/add/add_airlines',
            id: false,
            data: true
        },
        addAdministrator:{
            method: 'POST',
            url: '/add/add_administrators',
            id: false,
            data: true
        },
        removeAirline:{
            method: 'DELETE',
            url: '/remove/airlines',
            id: true,
            data: false
        },
        removeCustomer:{
            method: 'DELETE',
            url: '/remove/customers',
            id: true,
            data: false
        },
        removeAdministrator:{
            method: 'DELETE',
            url: '/remove/administrators',
            id: true,
            data: false
        },
    },
    CustomerAPIs: {
        updateCustomer:{
            method: 'PUT',
            url: '/update/customers',
            id: true,
            data: true
        },
        addTicket:{
            method: 'POST',
            url: '/add/tickets',
            id: false,
            data: true
        },
        removeTicket:{
            method: 'DELETE',
            url: '/remove/tickets',
            id: true,
            data: false
        },
        getMyTickets:{
            method: 'GET',
            url: '/get/tickets/customer',
            id: true,
            data: false
        },
    }
}

export default serverApis;