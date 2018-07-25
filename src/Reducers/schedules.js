

const initialState = []

// count :: (state, action) => newState
const schedules = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "UPDATE_SCHEDULE_LIST":

    return action.schedules[0].slots;

      
    default:
      return state
      
  }
  
}

export default schedules
