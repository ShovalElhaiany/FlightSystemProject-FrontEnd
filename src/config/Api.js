const api = (method, url, id = false, data = false) => ({ method, url, id, data });

const serverApis = {
    BaseApi : {
        //Flights
        getAllFlights: api('GET', '/get/flights'),
        getFlightById: api('GET', '/get/flights', true),
        getFlightsByParameters: api('POST', '/search/flights/parameters', false, true),
        //Airlines
        getAllAirlines: api('GET', '/get/airlinecompanies'),
        getAirlineById: api('GET', '/get/airlinecompanies', true),
        getAirlineByParameters: api('POST', '/search/airlines/parameters', false, true),
        //Countries
        getAllCountries: api('GET', '/get/countries'),
        getCountryById: api('GET', '/get/countries', true),
    },
    AnonymousApis : {
        login: api('POST', '/user/login', true),
        addCustomer: api('POST', '/user/add_customers', true),
    },
    AirlineApis : {
        updateAirline: api('PUT', '/update/airlinecompanies', true, true),
        addFlight: api('POST', '/add/add_flights', false, true),
        updateFlight: api('PUT', '/update/flights', true, true),
        deleteFlight: api('DELETE', '/delete/flights', true),
        getMyFlights: api('GET', '/get/flights', true),
    },
    AdminApis : {
        getAllCustomers: api('GET', '/get/customers'),
        deleteCustomer: api('DELETE', '/delete/customers', true),
        addAirline: api('POST', '/add/add_airlinecompanies', false, true),
        deleteAirline: api('DELETE', '/delete/airlinecompanies', true),
        getAllAdmins: api('GET', '/get/administrators'),
        addAdmin: api('POST', '/add/add_administrators'),
        deleteAdmin: api('DELETE', '/delete/administrators', true),
    },
    CustomerApis : {
        getCustomer: api('GET', '/get/customers', true),
        updateCustomer: api('PUT', '/update/customers', true, true),
        addTicket: api('POST', '/add/tickets', true),
        deleteTicket: api('DELETE', '/delete/tickets', true),
        getMyTickets: api('GET', '/search/tickets/customer', true),
    },
};

export default serverApis;