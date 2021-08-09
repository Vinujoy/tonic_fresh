import { combineReducers } from 'redux'
import homeReducer from './home/homeReducer'
import featureReducer from './featureProduct/featureProductReducer'

const rootReducer = combineReducers({  
  home: homeReducer,
  featureProduct:featureReducer
})

export default rootReducer