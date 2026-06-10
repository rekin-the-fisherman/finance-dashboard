const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Finance Tracker API is running!' })
})

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' })
})

app.get('/about', (req, res) => {
    res.json({ "name" : "Jomar", "project": "Finance Tracker"})
}) 

app.post('/expenses', (req, res) => {
    console.log(req.body)
    res.json({"message": "Expense saved!", data: req.body})
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})