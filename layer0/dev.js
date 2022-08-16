const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Saber]',
    command: (port) => `npx saber -- --port ${port}`,
    ready: [/localhost:/i],
  })
}
