import request from '../utils/request'

const defaultURL = 'login';


export function loginAPI(data) {

    return request({
        url: `${defaultURL}`,
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}