import request from '../../utils/request';
import qs from "qs"

export const fetchSchoolList = data => {
    return request({
      url: 'school',
      method: 'get',
    })
      .then(response => response.data)
      .catch(({ data }) => ({ error: data }));
  };

  export const fetchMemberList = data => {
    return request({
      url: 'schooluser/?school=1',
      method: 'get',
    })
      .then(response => response.data)
      .catch(({ data }) => ({ error: data }));
  };

export const loginAPI = data => {
    return request({
        url: 'login/',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

};

export const registerSchoolAPI = data => {
    return request({
        url: 'school/',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
};