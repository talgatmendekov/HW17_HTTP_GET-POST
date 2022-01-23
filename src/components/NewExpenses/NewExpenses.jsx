import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm"

function NewExpenses({onAddExpense}){ // деструктиризация пропса onAddExpense

    const saveExpenseDataHandler = (expenseData)=>{ // функция для подъема состояния которая задается в качестве обработчика внутри ExpenseForm
        const dataWithId = { // данные взятые с компоненты ExpenseForm через LiftingUp(Подъем состояния)
            ...expenseData, //
            id: Math.random().toString() // добавили id рандомно, чтобы они были уникальными
                                        // чтобы Reat корректо рендорил каждый элемент нужны уникальные ключи
        };

        onAddExpense(dataWithId) // передаем данные взятые с компоненты ExpenseForm в в корневой компонент App через функцию пропс onAddExpense
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveData={saveExpenseDataHandler}/> 
        </div>
    )
}

export default NewExpenses