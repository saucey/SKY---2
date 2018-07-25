import React from 'react';
import ScheduleVisualizerForm from './ScheduleVisualizerForm';
import ScheduleVisualizer from './ScheduleVisualizer';
import { Grid } from 'semantic-ui-react';



const ScheduleVisualizerComponent = ({schedules, getSchedule}) => (
    <Grid divided="vertically" padded="horizontally">
        <Grid.Row>
            <Grid.Column width={4}>
                <ScheduleVisualizerForm getSchedule={getSchedule}/>
            </Grid.Column>
            <Grid.Column width={4}>
                <ScheduleVisualizer schedules={schedules} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ScheduleVisualizerComponent;