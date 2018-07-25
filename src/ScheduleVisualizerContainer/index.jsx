import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ScheduleVisualizerComponent from '../ScheduleVisualizerComponent'
import { getSchedule } from '../actionCreators'

const mapDispatchToProps = dispatch => bindActionCreators({
  getSchedule
}, dispatch)


const mapStateToProps = state => ({
  schedules: state.schedules,
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleVisualizerComponent)
