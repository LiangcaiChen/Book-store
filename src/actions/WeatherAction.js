import axios from 'axios';

const API_KEY = 'fb69f9bd07ac497ca96d4c9deb9f60e4';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},GB`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};