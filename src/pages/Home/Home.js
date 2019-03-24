import React from 'react'
import DashboardLayout from 'components/_common/DashboardLayout'
import Card from 'components/_common/Card'
import TransactionListContainer from 'pages/Home/TransactionList'

export default () => (
  <DashboardLayout>
    <Card>
      <TransactionListContainer />
    </Card>
  </DashboardLayout>
)
