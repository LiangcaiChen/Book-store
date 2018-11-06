import {FETCH_WEATHER} from '../actions/WeatherAction';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return [...state, action.payload.data];

        default:
            return state;
    }
}