module.exports = async (title, name, content) => {
  const debug = require('debug')(`${title}:${name}`)

  await debug(content)
}