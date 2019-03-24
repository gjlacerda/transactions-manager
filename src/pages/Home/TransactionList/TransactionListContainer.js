import { connect } from 'react-redux'
import { operations } from 'state/transaction'
import TransactionList from './TransactionList'

const mapStateToProps = state => ({
  list: state.transaction.list,
  lastId: state.transaction.lastId,
  lastPage: state.transaction.lastPage,
  loading: state.transaction.loading,
})

const mapDispatchToProps = dispatch => ({
  requestTransactions: lastId => dispatch(operations.requestTransactions(lastId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList)
