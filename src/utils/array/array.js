const removeDuplicates = (
  listFrom = [],
  listTarget = [],
  indexProp,
) => listTarget.reduce((unique, o) => {
  if (!listFrom.some(obj => obj[indexProp] === o[indexProp])) {
    unique.push(o)
  }
  return unique
}, [])

const decorateTransactionList = (transactions, balance) => {
  let total = 0
  return transactions
    .map((transaction) => {
      const absoluteValue = Math.abs(transaction.value)
      return {
        ...transaction,
        accumulated: total += (transaction.kind === 'credit')
          ? +absoluteValue
          : -absoluteValue,
      }
    })
    .map(transaction => ({
      ...transaction,
      accumulated: transaction.accumulated + (balance - total),
    }))
    .reverse()
}

export {
  removeDuplicates,
  decorateTransactionList,
}
