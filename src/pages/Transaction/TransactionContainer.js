import { connect } from 'react-redux'
import { operations } from 'state/transaction'
import Transaction from './Transaction'

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(operations.addTransaction(transaction)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Transaction)
