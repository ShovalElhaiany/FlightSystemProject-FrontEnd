import axios from 'axios';

// Define the base URL for the API endpoint.
const API_BASE_URL = 'http://127.0.0.1:5000';

// Create an axios instance with the specified base URL.
const api = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Send a request using the provided method, URL, and data.
 * 
 * @param {string} method - The HTTP method (GET, POST, etc.).
 * @param {string} url - The endpoint URL.
 * @param {Object} [data=null] - The data to be sent with the request.
 * @returns {Object} An object containing the response data and headers.
 * @throws Will throw an error if the request fails.
 */
const sendRequest = async (method, url, data = null) => {
  try {
    const response = await api.request({
      method,
      url,
      data,
    });
    return {
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    throw new Error(`Error sending ${method} request to ${url}: ${error.message}`);
  }
};

/**
 * Build an API function using the given parameters.
 * 
 * @param {Object} params - Parameters for building the API function.
 * @param {string} params.id - The ID to be appended to the URL.
 * @param {string} params.method - The HTTP method (GET, POST, etc.).
 * @param {string} params.url - The endpoint URL.
 * @param {Object} params.data - The data to be sent with the request.
 * @returns {Function} A function that, when called, will execute the API request.
 */
const buildApiFunction = ({ id, method, url, data }) => {
  const formattedUrl = id ? `${url}/${id}` : url; // Format the URL to optionally include an ID.
  return () => sendRequest(method, formattedUrl, data); // Return a function that calls sendRequest.
};

export default buildApiFunction;
