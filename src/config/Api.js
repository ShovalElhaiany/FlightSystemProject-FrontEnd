// Define a function to build URL paths
const buildPath = (base, resource, subResource = '') => `${base}/${resource}${subResource ? `/${subResource}` : ''}`;

// Define a function to create an API object
const api = (method, url, id = false, data = false) => ({ method, url, id, data });

// Common base paths
const basePath = '/base';
const anonymousPath = '/anonymous';
const airlinePath = '/airline';
const adminPath = '/administrator';
const customerPath = '/customer';

const serverApis = {
    BaseApi: {
        // Flights
        getAllFlights: api('GET', `${basePath}/flights`),
        getFlightById: api('GET', `${basePath}/flights`, true),
        getFlightsByParameters: api('POST', `${basePath}/flights/parameters`, false, true),
        // Airlines
        getAllAirlines: api('GET', `${basePath}/airlines`),
        getAirlineById: api('GET', `${basePath}/airlines`, true),
        getAirlineByParameters: api('POST', `${basePath}/airlines/parameters`, false, true),
        // Countries
        getAllCountries: api('GET', `${basePath}/countries`),
        getCountryById: api('GET', `${basePath}/countries`, true),
    },
    AnonymousApis: {
        login: api('POST', `${anonymousPath}/login`),
        addCustomer: api('POST', `${anonymousPath}/add_customers`),
    },
    AirlineApis: {
        updateAirline: api('PUT', buildPath(airlinePath, 'airlines'), true, true),
        addFlight: api('POST', buildPath(airlinePath, 'flights'), false, true),
        updateFlight: api('PUT', buildPath(airlinePath, 'flights'), true, true),
        deleteFlight: api('DELETE', buildPath(airlinePath, 'flights'), true),
        getMyFlights: api('GET', buildPath(airlinePath, 'flights', 'airline'), true),
    },
    AdminApis: {
        getAllCustomers: api('GET', buildPath(adminPath, 'customers')),
        getCustomer: api('GET', buildPath(adminPath, 'customers'), true),
        addAirline: api('POST', buildPath(adminPath, 'add_airlines'), false, true),
        getAllAdmins: api('GET', buildPath(adminPath, 'administrators')),
        getAdmin: api('GET', buildPath(adminPath, 'administrators'), true),
        addAdmin: api('POST', buildPath(adminPath, 'add_administrators')),
        deleteAirline: api('DELETE', buildPath(adminPath, 'airlines'), true),
        deleteCustomer: api('DELETE', buildPath(adminPath, 'customers'), true),
        deleteAdmin: api('DELETE', buildPath(adminPath, 'administrators'), true),
    },
    CustomerApis: {
        getCustomer: api('GET', buildPath(customerPath, 'customers'), true),
        updateCustomer: api('PUT', buildPath(customerPath, 'customers'), true, true),
        addTicket: api('POST', buildPath(customerPath, 'tickets'), false),
        deleteTicket: api('DELETE', buildPath(customerPath, 'tickets'), true),
        getAllTickets: api('GET', buildPath(customerPath, 'tickets'), false),
        getTicket: api('GET', buildPath(customerPath, 'tickets'), true),
        getMyTickets: api('GET', buildPath(customerPath, 'tickets', 'customer'), true),
    },
};

export default serverApis;
