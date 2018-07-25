import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers'
import fetchSchedules from './Middleware/fetchSchedules'

export default createStore(
  reducers,
  applyMiddleware(fetchSchedules)
)