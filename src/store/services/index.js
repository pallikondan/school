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