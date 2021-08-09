import axios from 'axios'
import {    
    FETCH_FEATURE_PRODUCT_REQUEST,
    FETCH_FEATURE_PRODUCT_SUCCESS,
    FETCH_FEATURE_PRODUCT_FAILURE
} from './featureProductTypes'

var config = {
    headers: {
        'x-api-token': 'b8Z5x8Mnrs5ypROMs6xD',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
// ACTION FOR featured product
export const fetchFeatureProducts = () => {
    return (dispatch) => {
        dispatch(fetchFeatureProductsRequest())
        axios
            .get("http://18.118.68.45/public/api/featured-product", config)
            .then(response => {
                // response.data is the FeatureProducts
                const featureProductsData = response.data
                console.log("featured-product", featureProductsData);
                dispatch(fetchFeatureProductsSuccess(featureProductsData))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchFeatureProductsFailure(error.message))
            })
    }
}

export const fetchFeatureProductsRequest = () => {
    return {
        type: FETCH_FEATURE_PRODUCT_REQUEST
    }
}

export const fetchFeatureProductsSuccess = featureProductsData => {
    return {
        type: FETCH_FEATURE_PRODUCT_SUCCESS,
        payload: featureProductsData
    }
}

export const fetchFeatureProductsFailure = error => {
    return {
        type: FETCH_FEATURE_PRODUCT_FAILURE,
        payload: error
    }
}