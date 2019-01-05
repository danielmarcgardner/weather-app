import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

export default class Api {
  static getWeatherByZipCode = (zip) => axios.get(`http://api.apixu.com/v1/forecast.json?key=${REACT_APP_API_KEY}&q=${zip}&days=5`).then(resp => resp.data).catch(e => console.error(e))
}
