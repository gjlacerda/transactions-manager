import { connect } from 'react-redux'
import { operations } from 'state/transaction'
import TransactionList from './TransactionList'

const mapStateToProps = state => ({
  list: state.transaction.list,
  lastId: state.transaction.lastId,
  lastPage: state.transaction.lastPage,
  loading: state.transaction.loading,
  dirty: state.transaction.dirty,
  balance: state.balance.balance,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestTransactions: lastId => dispatch(operations.requestTransactions(lastId)),
  history: ownProps.history,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList)
