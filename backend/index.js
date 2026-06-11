const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

const expenses = []

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
  if (req.body.amount && req.body.category) {
    const expense = req.body
    expenses.push(expense)
    res.json({ message: "Expense saved!", data: req.body })
  } else {
    res.status(400).json({ message: "Amount and category are required!" })
  }
})

app.get("/expenses", (req, res) => {
  res.json(expenses)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})