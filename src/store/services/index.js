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

  export const fetchMemberListService = data => {
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
    }).then(response => { console.log('responseeeee', response); return response.data})
    .catch(({ data }) => ({ error: data }));

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

export const registerMultipleSchoolAPI = data => {
  return request({
      url: 'school/',
      method: 'post',
      data,
      headers: {
          'Content-Type': 'application/json'
      }
  })
};

export const deleteUserAPI = data => {
    return request({
        url: 'user/deactivate/',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
};