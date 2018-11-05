import {FETCH_WEATHER} from '../actions/WeatherAction';

export default (state=null, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return state;

        default:
            return state;
    }
}