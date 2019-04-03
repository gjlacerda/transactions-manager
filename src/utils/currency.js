export const formatToHuman = value => new Intl.NumberFormat('de-DE').format(value)

export const formatToMachine = value => +value
  .replace(/\./g, '')
  .replace(',', '.')
