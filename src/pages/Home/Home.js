import React from 'react'
import DashboardLayout from 'components/_common/DashboardLayout'
import Card from 'components/_common/Card'
import TransactionListContainer from './TransactionList'
import Balance from './Balance'

export default ({ history }) => (
  <DashboardLayout>
    <Card>

      <Balance />
    </Card>
    <Card>
      <TransactionListContainer history={history} />
    </Card>
  </DashboardLayout>
)
