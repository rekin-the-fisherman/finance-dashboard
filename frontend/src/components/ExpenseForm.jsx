import { useState } from "react"


function ExpenseForm({onExpenseAdded}) {
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, category, description, date })
        })
        const data = await response.json()
        console.log(data)
        setAmount("")
        setCategory("")
        setDescription("")
        setDate("")
        onExpenseAdded(data.data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Amount</label>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <label>Category</label>
            <input  placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <label>Description</label>
            <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Date</label>
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>

            <button type="submit">Add Expenses</button>
        </form> 
    )
}


export default ExpenseForm