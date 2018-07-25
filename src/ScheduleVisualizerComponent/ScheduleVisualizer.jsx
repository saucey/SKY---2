import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import TableRow from './ScheduleTableRow';
import TableHeader from './ScheduleTableHeader';

const ScheduleVisualizer = ({schedules}) => 
	<div>
	{
		schedules.length > 0 ? 

		<Table basic>
			<TableHeader />
			<Table.Body>
			{ 
				schedules.map((schedule, index) =>
					(
				      	<TableRow schedule={schedule} />
					)
				)
			}
			</Table.Body>
		</Table>

		: <h1>No schedules to be displayed</h1>

	}
	</div>    
		
		


export default ScheduleVisualizer;
