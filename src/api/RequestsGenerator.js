import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const sendRequest = async (method, url, data = null) => {
  console.log(data)
  console.log(api)
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

const buildApiFunction = ({id, method, url, data}) => {
  const formattedUrl = id ? `${url}/${id}` : url;
  return () => sendRequest(method, formattedUrl, data);
};

export default buildApiFunction;