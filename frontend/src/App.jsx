import { useState, useEffect} from "react"
import ExpenseForm from "./components/ExpenseForm"

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

  return (
    <div>
      <h1>Finance Tracker</h1>
      <ExpenseForm onExpenseAdded={handleNewExpense}/>
      <pre>{JSON.stringify(expenses, null, 2)}</pre>
      

    </div>
  )
}

export default App