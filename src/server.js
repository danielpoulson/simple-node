import http from 'http'
import config from './config'

export const app = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!\n')
})

export const start = async () => {
  try {
    app.listen(config.port, config.hostname, () => {
      console.log(`REST API on http://localhost:${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
