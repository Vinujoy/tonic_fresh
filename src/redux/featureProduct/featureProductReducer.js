import {
    FETCH_FEATURE_PRODUCT_REQUEST,
    FETCH_FEATURE_PRODUCT_SUCCESS,
    FETCH_FEATURE_PRODUCT_FAILURE
  } from './featureProductTypes'
  
  const initialState = {
    loading: false,
    featureData: [],
    error: ''
  }
  
  const featureReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FEATURE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_FEATURE_PRODUCT_SUCCESS:
        return {
          loading: false,
          featureData: action.payload,
          error: ''
        }
      case FETCH_FEATURE_PRODUCT_FAILURE:
        return {
          loading: false,
          featureData: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default featureReducer