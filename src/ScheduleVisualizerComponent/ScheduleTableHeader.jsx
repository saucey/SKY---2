import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeader = () => (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title Name</Table.HeaderCell>
        <Table.HeaderCell>Start Time</Table.HeaderCell>
        <Table.HeaderCell>End Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
)

export default TableHeader