import axios from 'axios';

const baseURL = 'https://staging.api.s1nc.com.br/api/concept_beta/'

const HTTP_HEADER = {
  'application-origin': 'W1 Client App 1.0'
};

const HTTP_CLIENT_CONFIG = {
  baseURL: baseURL,
  headers: HTTP_HEADER,
};

const api = axios.create(HTTP_CLIENT_CONFIG);

export function setAuthToken(token?: string | null) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
}

export { api };
