import { combineReducers } from 'redux'

// import counters from './counters'
import schedules from './schedules'

/*
 * {
 *    counters: [Number]
 *    theme: String
 * }
 */

// stateReducer :: (state, action) => newState
export default combineReducers({
  schedules
})
