import {
    FETCH_HOME_REQUEST,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILURE
  } from './homeTypes'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_HOME_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_HOME_SUCCESS:
        return {
          loading: false,
          homeData: action.payload,
          error: ''
        }
      case FETCH_HOME_FAILURE:
        return {
          loading: false,
          homeData: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default homeReducer