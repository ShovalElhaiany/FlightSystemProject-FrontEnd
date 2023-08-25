const api = (method, url, id = false, data = false) => ({ method, url, id, data });

const serverApis = {
    BaseApi : {
        //Flights
        getAllFlights: api('GET', '/base/flights'),
        getFlightById: api('GET', '/base/flights', true),
        getFlightsByParameters: api('GET', '/base/flights/parameters', false, true),
        //Airlines
        getAllAirlines: api('GET', '/base/airlines'),
        getAirlineById: api('GET', '/base/airlines', true),
        getAirlineByParameters: api('GET', '/base/airlines/parameters', false, true),
        //Countries
        getAllCountries: api('GET', '/base/countries'),
        getCountryById: api('GET', '/base/countries', true),
    },
    AnonymousApis : {
        login: api('POST', '/anonymous/login'),
        addCustomer: api('POST', '/anonymous/add_customers'),
    },
    AirlineApis : {
        updateAirline: api('PUT', '/airline/airlines', true, true),
        addFlight: api('POST', '/airline/flights', false, true),
        updateFlight: api('PUT', '/airline/flights', true, true),
        deleteFlight: api('DELETE', '/airline/flights', true),
        getMyFlights: api('GET', '/airline/flights/airline', true),
    },
    AdminApis : {
        getAllCustomers: api('GET', '/administrator/customers'),
        addAirline: api('POST', '/administrator/add_airlines', false, true),
        getAllAdmins: api('GET', '/administrator/administrators'),
        addAdmin: api('POST', '/administrator/add_administrators'),
        deleteAirline: api('DELETE', '/administrator/airlines', true),
        deleteCustomer: api('DELETE', '/administrator/customers', true),
        deleteAdmin: api('DELETE', '/administrator/administrators', true),
    },
    CustomerApis : {
        getCustomer: api('GET', '/customer/customers', true),
        updateCustomer: api('PUT', '/customer/customers', true, true),
        addTicket: api('POST', '/customer/tickets', false),
        deleteTicket: api('DELETE', '/customer/tickets', true),
        getAllTickets: api('GET', '/customer/tickets', false),
        getMyTickets: api('GET', '/customer/tickets/customer', true),
    },
};

export default serverApis;