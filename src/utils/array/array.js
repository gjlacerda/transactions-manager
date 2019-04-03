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

export {
  removeDuplicates,
}
