const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

let expenses = []

let count = 0

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Finance Tracker API is running!' })
})

app.get('/about', (req, res) => {
    res.json({ "name" : "Jomar", "project": "Finance Tracker"})
}) 

app.get("/expenses", (req, res) => {
  res.json(expenses)
})

app.post('/expenses', (req, res) => { 
  if (req.body.amount && req.body.category) {
    count++
    const expense = { id: count, ...req.body}
    expenses.push(expense)
    res.json({ message: "Expense saved!", data: expense })
  } else {
    res.status(400).json({ message: "Amount and category are required!" })
  }
})

app.delete('/expenses/:id', (req, res) => {
  const id = Number(req.params.id)
  expenses = expenses.filter(expense => expense.id !== id)
  console.log(Number(req.params.id))
  res.json({message: `ID # ${id} is deleted`})
})

app.put('/expenses/:id', (req, res) => {
  const id = Number(req.params.id)
  const expense = expenses.find(expense => expense.id === id)
  if (!expense) {
    return res.status(404).json({ message: "Expense not found!" })
  }
  expense.amount = req.body.amount
  expense.category = req.body.category
  expense.description = req.body.description
  res.json({ message: `Here is ID #${id}`, data: expense})
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})