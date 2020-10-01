import axios from 'axios'
import { getAuthToken } from "./Auth";

const request = axios.create({
      baseURL: 'https://civil-envoy-288110.el.r.appspot.com/api/'
});


request.interceptors.request.use(
    (config) => {
        let AUTH_TOKEN = getAuthToken();
        if(AUTH_TOKEN){
            config.headers['Authorization'] = `Token ${AUTH_TOKEN}`;
        }
        return config
    },
    (error) => {
      return Promise.reject(error)
    }
);
request.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.log('Error on API', error);
      return Promise.reject(error)
    }
);

export default request

