import { connect } from 'react-redux'
import { operations } from 'state/balance'
import Balance from './Balance'

const mapStateToProps = state => ({
  balance: state.balance.balance,
  loading: state.balance.loading,
})

const mapDispatchToProps = dispatch => ({
  requestBalance: () => dispatch(operations.requestBalance()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Balance)
