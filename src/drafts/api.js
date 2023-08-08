import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const sendRequest = async (method, url, data = null) => {
  try {
    const response = await api.request({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error sending ${method} request to ${url}: ${error.message}`);
  }
};
const apiFunctions = {

  // Base APIs
  getAllFlights: () => sendRequest('GET', '/flights'),
  getFlightById: (flightId) => sendRequest('GET', `/flights/${flightId}`),
  getFlightsByParameters: () => sendRequest('GET', '/flights/parameters'),
  getAllAirlines: () => sendRequest('GET', '/airlines'),
  getAirlineById: (airlineId) => sendRequest('GET', `/airlines/${airlineId}`),
  getAirlineByParameters: () => sendRequest('GET', '/airlines/parameters'),
  getAllCountries: () => sendRequest('GET', '/countries'),
  getCountryById: (countryId) => sendRequest('GET', `/countries/${countryId}`),

  // Anonymous APIs
  login: (data) => sendRequest('POST', '/login', data),
  addCustomer: (data) => sendRequest('POST', '/add_customers', data),

  // Airline APIs
  updateAirline: (airlineId, data) => sendRequest('PUT', `/airlines/${airlineId}`, data),
  addFlight: (data) => sendRequest('POST', '/flights', data),
  updateFlight: (flightId, data) => sendRequest('PUT', `/flights/${flightId}`, data),
  removeFlight: (flightId) => sendRequest('DELETE', `/flights/${flightId}`),
  getMyFlights: (customerId) => sendRequest('GET', `/flights/customer/${customerId}`),

  // Administrator APIs
  getAllCustomers: () => sendRequest('GET', '/customers'),
  addAirline: (data) => sendRequest('POST', '/add_airlines', data),
  addAdministrator: (data) => sendRequest('POST', '/add_administrators', data),
  removeAirline: (airlineId) => sendRequest('DELETE', `/airlines/${airlineId}`),
  removeCustomer: (customerId) => sendRequest('DELETE', `/customers/${customerId}`),
  removeAdministrator: (adminId) => sendRequest('DELETE', `/administrators/${adminId}`),

  // Customer APIs
  updateCustomer: (customerId, data) => sendRequest('PUT', `/customers/${customerId}`, data),
  addTicket: (data) => sendRequest('POST', '/tickets', data),
  removeTicket: (ticketId) => sendRequest('DELETE', `/tickets/${ticketId}`),
  getMyTickets: (customerId) => sendRequest('GET', `/tickets/customer/${customerId}`),
  test: () => sendRequest('GET', `/get/customers`),
  
};

export default apiFunctions;
