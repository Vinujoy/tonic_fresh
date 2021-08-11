import { combineReducers } from 'redux'
import homeReducer from './home/homeReducer'
import featureReducer from './featureProduct/featureProductReducer'
import { authentication,registration } from './user/userReducers'
import {alert} from './alert/alertReducers'

const rootReducer = combineReducers({  
  home: homeReducer,
  featureProduct:featureReducer,
  authentication,
  alert,
  registration
})

export default rootReducer