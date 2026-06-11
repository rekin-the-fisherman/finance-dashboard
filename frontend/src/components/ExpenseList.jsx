
function ExpenseList({expenses, onExpenseDeleted}) {

    async function deleteExpenseList(expense) {
        const del = await fetch(`http://localhost:3000/expenses/${expense}`, {
            method: "DELETE",
        })
        const data = await del.json()
        onExpenseDeleted(expense)
    }

    return (
    <ul>
        {expenses.map(expense => (
        <li key={expense.id}>{expense.amount} - {expense.category} - {expense.description} - {expense.date} <button onClick={() => deleteExpenseList(expense.id)}>Delete</button></li>
        ))}
    </ul>
    )
}

export default ExpenseList