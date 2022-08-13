const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Saber]',
    command: (port) => `npm run dev -- --port ${port}`,
    ready: [/localhost:/i],
  })
}
