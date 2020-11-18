import axios from 'axios'
import { getAuthToken } from "./Auth";

const client = axios.create({
      baseURL: 'https://civil-envoy-288110.el.r.appspot.com/api/'
});


const request = options => {
  let AUTH_TOKEN = '22d6b2bc272b509b3a9ac4873e0f59089bb3aadc';
  if (AUTH_TOKEN) {
    //const { token } = getStorage('artworkAuth');
    client.defaults.headers.common['authorization'] = `Token ${AUTH_TOKEN}`;
  } else {
    delete client.defaults.headers.common['authorization'];
  }
  return client(options)
    .then(response => response.data)
    .catch(error => Promise.reject(error.response || error.message));
};

export default request;


// request.interceptors.request.use(
//     (config) => {
//         let AUTH_TOKEN = '22d6b2bc272b509b3a9ac4873e0f59089bb3aadc';
//         if(AUTH_TOKEN){
//             config.headers['Authorization'] = `Token ${AUTH_TOKEN}`;
//         }
//         return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     }
// );
// request.interceptors.response.use(
//      (response) => {
//         return response.data

//     },
//     (error) => {
//       return Promise.reject(error)
//     }
// );

// export default request

