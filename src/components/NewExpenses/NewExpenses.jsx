import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm"

function NewExpenses({onAddExpense}){

    const saveExpenseDataHandler = (expenseData)=>{
        const dataWithId = {
            ...expenseData,
            id: Math.random().toString()
            // id: Date.now()
        };

        onAddExpense(dataWithId )
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpenses