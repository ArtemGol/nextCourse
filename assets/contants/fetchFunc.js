export const fetchFunc = (url) => {
  const fetch = require('node-fetch')
  fetch(`${url}`).then(res => res.json())
}
