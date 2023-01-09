const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static("pages"))

app.use("/images", express.static("images"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendfile(path.join(__dirname,"pages/home.html"))
  })

app.get('/student-reg', (req, res) => {
    res.sendfile(path.join("pages/student_reg.html"))
  })

  app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})