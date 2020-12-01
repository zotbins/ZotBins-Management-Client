import React from 'react'
import { Card, Table } from 'antd'

const columns = [
  {
    title: 'Rank',
    dataIndex: 'name',
  },
  {
    title: 'Building',
    dataIndex: 'age',
  },
  {
    title: 'Waste',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
]

const data = [
  {
    key: '1',
    name: '1',
    age: 'Donald Bren Hall',
    address: '85',
  },
  {
    key: '2',
    name: '2',
    age: 'Information and Computer Science 2',
    address: '100',
  },
  {
    key: '3',
    name: '3',
    age: 'Student Center Dining Hall 1',
    address: '320',
  },
  {
    key: '4',
    name: '4',
    age: 'Mesa Tower',
    address: '512',
  },
]

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}

class BinTable extends React.Component {
  render() {
    return (
      <div>
        <Card id="bin-table-card">
          <h3 id="leaderboard-text">Leaderboard</h3>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            size="small"
          />
        </Card>
      </div>
    )
  }
}

export default BinTable
