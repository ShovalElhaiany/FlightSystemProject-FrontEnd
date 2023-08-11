const api = (method, url, id = false, data = false) => ({ method, url, id, data });

const serverApis = {
    BaseApi : {
        getAllFlights: api('GET', '/get/flights'),
        getFlightById: api('GET', '/get/flights', true),
        getFlightsByParameters: api('GET', '/get/flights/parameters'),
        getAllAirlines: api('GET', '/get/airlines'),
        getAirlineById: api('GET', '/get/airlines', true),
        getAirlineByParameters: api('GET', '/get/airlines/parameters'),
        getAllCountries: api('GET', '/get/countries'),
        getCountryById: api('GET', '/get/countries', true),
    },
    AnonymousApis : {
        login: api('POST', '/user/login', true),
        addCustomer: api('POST', '/user/add_customers', true),
    },
    AirlineApis : {
        updateAirline: api('PUT', '/update/airlines', true, true),
        addFlight: api('POST', '/add/flights', true),
        updateFlight: api('PUT', '/update/flights', true, true),
        deleteFlight: api('DELETE', '/delete/flights', true),
        getMyFlights: api('GET', '/get/flights', true),
    },
    AdminApis : {
        getAllCustomers: api('GET', '/get/customers'),
        addAirline: api('POST', '/add/add_airlines', true),
        addAdministrator: api('POST', '/add/add_administrators', true),
        deleteAirline: api('DELETE', '/delete/airlines', true),
        deleteCustomer: api('DELETE', '/delete/customers', true),
        deleteAdministrator: api('DELETE', '/delete/administrators', true),
    },
    CustomerApis : {
        updateCustomer: api('PUT', '/update/customers', true, true),
        addTicket: api('POST', '/add/tickets', true),
        deleteTicket: api('DELETE', '/delete/tickets', true),
        getMyTickets: api('GET', '/get/tickets/customer', true),
    },
};

export default serverApis;