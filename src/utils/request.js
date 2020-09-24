import axios from 'axios'


const request = axios.create({
    baseURL: ''

    /*
     * BaseURL: 'http://localhost:3000/api/merchant/',
     * timeout: 1000 // request timeout
     */
  });


    request.interceptors.request.use((config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  }
);


request.interceptors.response.use((response) => response.data,
  (error) => {
    console.log(
      error,
      'api err'
    );
    return Promise.reject(error)
  }
);

export default request
