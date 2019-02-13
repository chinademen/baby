let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://api.github.com/'
} else {
  baseUrl = 'https://api.github.com/'
}
export {
  baseUrl
}

