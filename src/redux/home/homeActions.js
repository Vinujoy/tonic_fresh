import axios from 'axios'
import {
    FETCH_HOME_REQUEST,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILURE,
    FETCH_FEATURE_PRODUCT_REQUEST,
    FETCH_FEATURE_PRODUCT_SUCCESS,
    FETCH_FEATURE_PRODUCT_FAILURE
} from './homeTypes'


var config = {
    headers: {
        'x-api-token': 'b8Z5x8Mnrs5ypROMs6xD',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

// ACTION FOR HOME 
export const fetchHome = () => {
    return (dispatch) => {
        dispatch(fetchHomeRequest())
        axios
            .get("http://18.118.68.45/public/api/home-screen", config)
            .then(response => {
                // response.data is the Home
                const homeData = response.data
                console.log("homedata", homeData);
                dispatch(fetchHomeSuccess(homeData))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchHomeFailure(error.message))
            })
    }
}

export const fetchHomeRequest = () => {
    return {
        type: FETCH_HOME_REQUEST
    }
}

export const fetchHomeSuccess = homeData => {
    return {
        type: FETCH_HOME_SUCCESS,
        payload: homeData
    }
}

export const fetchHomeFailure = error => {
    return {
        type: FETCH_HOME_FAILURE,
        payload: error
    }
}


