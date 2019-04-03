import { connect } from 'react-redux'
import { operations, selectors } from 'state/transaction'
import TransactionList from './TransactionList'

const mapStateToProps = state => ({
  list: selectors.mapAccumulatedValue(
    state.transaction.list,
    state.balance.balance,
  ),
  lastId: state.transaction.lastId,
  lastPage: state.transaction.lastPage,
  loading: state.transaction.loading,
  dirty: state.transaction.dirty,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestTransactions: lastId => dispatch(operations.requestTransactions(lastId)),
  history: ownProps.history,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList)
