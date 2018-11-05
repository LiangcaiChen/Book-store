import {createStore, combineReducers, applyMiddleware} from 'redux';
import WeatherReducer from '../reducers/WeatherReducer';
import ReduxPromise from 'redux-promise';

export default () => {
    return createStore(
        combineReducers({
            weathers: WeatherReducer
        }),applyMiddleware(ReduxPromise)
    )
}