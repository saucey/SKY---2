import React from 'react';
import { Table } from 'semantic-ui-react';


const TableRow = ({schedule}) => (
  <Table.Row>
    <Table.HeaderCell>{schedule.titleName}</Table.HeaderCell>
    <Table.HeaderCell>{schedule.startTime}</Table.HeaderCell>
    <Table.HeaderCell>{schedule.endTime}</Table.HeaderCell>
  </Table.Row>
)

export default TableRow;