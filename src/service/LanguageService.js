import axios from 'axios';

export class LanguageService {
  getLanguages(_this) {
    return axios.get('http://192.168.0.68:5082/api/Language').then(res => {
      return res.data;
    });
  }
}