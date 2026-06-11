import { useState, useEffect} from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"

function App() {

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    async function fetchExpenses() {
      const response = await fetch("http://localhost:3000/expenses")
      const data = await response.json()
      setExpenses(data)  // save to state!
    }
    fetchExpenses()
  }, [])

  function handleNewExpense(data) {
    setExpenses([...expenses, data])
  }

  function handleDeleteExpense(id) {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div>
      <h1>Finance Tracker</h1>
      <ExpenseForm onExpenseAdded={handleNewExpense}/>
      <ExpenseList expenses={expenses} onExpenseDeleted={handleDeleteExpense}/>
      

    </div>
  )
}

export default App