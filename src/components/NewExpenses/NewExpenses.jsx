import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm"

function NewExpenses({onGetExpense}){ // деструктиризация пропса onAddExpense

    // const saveExpenseDataHandler = (expenseData)=>{ // функция для подъема состояния которая задается в качестве обработчика внутри ExpenseForm
    //     const dataWithId = { // данные взятые с компоненты ExpenseForm через LiftingUp(Подъем состояния)
    //         ...expenseData, //
    //         id: Math.random().toString() // добавили id рандомно, чтобы они были уникальными
    //                                     // чтобы Reat корректо рендорил каждый элемент нужны уникальные ключи
    //     };

    //     onPostExpense(dataWithId) // передаем данные взятые с компоненты ExpenseForm в в корневой компонент App через функцию пропс onAddExpense
    // };
    const getPostDataHandler = (postData) => {
        onGetExpense(postData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm  onGetPostData = {getPostDataHandler}/> 
        </div>
    )
}

export default NewExpenses