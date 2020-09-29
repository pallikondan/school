import axios from 'axios';
import {hasStorage, getStorage} from '../store/localStorage'


const client = axios.create({
    baseURL: 'https://civil-envoy-288110.el.r.appspot.com/api/'

    /*
     * BaseURL: 'http://localhost:3000/api/merchant/',
     * timeout: 1000 // request timeout
     */
  });

  const token = 'Token 22d6b2bc272b509b3a9ac4873e0f59089bb3aadc'

const request = options => {
  if (hasStorage('schoolAuth')) {
   // const { token } = getStorage('schoolAuth');
    client.defaults.headers.common['authorization'] = token;
  } else {
    client.defaults.headers.common['authorization'] = token;
    //delete client.defaults.headers.common['authorization'];
  }
  return client(options)
    .then(response => response)
    .catch(error => Promise.reject(error.response || error.message));
};

export default request

