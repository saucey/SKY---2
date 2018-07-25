export const getSchedule = query => ({
  type: "GET_SCHEDULE_LIST",
  query
})

export const updateScheduleList = schedules => ({
  type: "UPDATE_SCHEDULE_LIST",
  schedules
})