const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 8080)

app.use('/', express.static(path.resolve('dist')))

app.get('/*', (request, response) => response.sendFile(path.resolve('dist/index.html')))

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${app.get('port')}`)
})
