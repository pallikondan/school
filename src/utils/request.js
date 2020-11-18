import axios from 'axios'
import { getAuthToken } from "./Auth";

const request = axios.create({
      baseURL: 'https://civil-envoy-288110.el.r.appspot.com/api/'
});


request.interceptors.request.use(
    (config) => {
        let AUTH_TOKEN = '22d6b2bc272b509b3a9ac4873e0f59089bb3aadc';
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
     (response) => {
        return response.data

    },
    (error) => {
      return Promise.reject(error)
    }
);

export default request

