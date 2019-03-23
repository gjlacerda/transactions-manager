import React from 'react'
import DashboardLayout from 'components/_common/DashboardLayout'
import Card from 'components/_common/Card'
import TransactionList from './TransactionList'

export default () => (
  <DashboardLayout>
    <Card>
      <TransactionList />
    </Card>
  </DashboardLayout>
)
