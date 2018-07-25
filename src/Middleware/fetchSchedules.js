import {updateScheduleList} from '../actionCreators'

const fetchSchedules = store => next => action => {

  next(action)
  
  switch (action.type) {
    //Calls all movies from a api mocking service, later can be replace we real API
    case 'GET_SCHEDULE_LIST':

  console.log(action.query.channel, 'channel!!!');
  console.log(action.query.startDate, 'start date!!!');


      fetch("http://localhost:3001/schedule-repo/api/v1/schedule?channel={channel_input}&date={channel_input}")
        .then(resp => resp.json())
        .then(schedules => store.dispatch(updateScheduleList(schedules)))
      break;
      
    default:
    
  }
  
  
}

export default fetchSchedules
