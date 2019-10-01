import axios from 'axios';
import StringUtils from '../../../components/StringUtils';

const BASE_URL = 'http://192.168.0.68:5081/api';


function callApi(endpoint, customparams ,options = {}) {
  const url = BASE_URL + endpoint;
  const queryString =  StringUtils.jsonToQueryString(customparams);
  return axios.get(BASE_URL + queryString).then(res => {
    return res.data;
  });
  return {};
}

const api = {
  countries: {
    list(params) {
      return callApi('/api/Countries',params);
    },
  }
};

export default  api;