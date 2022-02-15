import './ExpenseForm.css'
import { useState } from 'react'
import AddModal from '../UI/AddModal'

const ExpenseForm = (props) => {
	
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	})

	
	
	const [todoModal, setTodoModal] = useState(null)

	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		setUserInput((prevState) => {
			return {
				...prevState,
				[currentInput]: event.target.value,
			}
		})
	}

	// const inputChangeHandler = (e) => { // обработчик на событии onChange для трех инпутов
	// 	const currentInput = e.target.name
	// 	if (currentInput === 'title') {
	// 		setTitle(e.target.value) // получили значение с инпута title
	// 	} else if (currentInput === 'amount') {
	// 		setAmount(e.target.value) // получили значение с инпута amount
	// 	} else if (currentInput === 'date') {
	// 		setDate(e.target.value) // получили значение с инпута date
	// 	}
	// }

	// const titleChangeHandler = (event) => {
	// 	setUserInput({
	// 		...userInput,
	// 		title: event.target.value
	// 	})
	// };
	// const amountChangeHandler = (event) => {
	// 	setUserInput({
	// 		...userInput,
	// 		amount: event.target.value
	// 	})
	// };
	// const dateChangeHandler = (event) => {
	// 	setUserInput({
	// 		...userInput,
	// 		date: event.target.value
	// 	})
	// };

	const submitHandler = (e) => {
		e.preventDefault() // предотвращает повидение form заданое по умолчанию
		const currentData = {
			// в константе в ввиде объектов хранятся данные с инпутов
			title: userInput.title, // если ключ и свойство похожи можно использовать shortcut версию, написать только ключ. React сам поймет что свойство это title
			amount: Number(userInput.amount), //использование метода Number для преоброзования Amount в число, так как значение инпута всегда строка.
			date: new Date(userInput.date),
		}
		console.log(currentData)
		props.onSaveData(currentData) // передаем данные с наших инпутов в родительский компонент NewExpense вызвав пропс OnSaveData
	}

	const showModalHandler = () => {
		setTodoModal(true)
	}

	const cancelModalHandler = () => {
		setTodoModal(null)
	}
	return (
		
		<>
			{todoModal && (
				<AddModal
					onChange={inputChangeHandler}
					onSubmit={submitHandler}
					onClick={cancelModalHandler}
					title={userInput.title} // two-way data binding (передал value как props)
					amount={userInput.amount}
					date={userInput.date}
				/>
			)}
			<button
				className={todoModal ? 'action' : ''}
				onClick={showModalHandler}
			>
				Add New Expense
			</button>
			{/* <button onClick={cancelModalHandler}>Cancel</button> */}
		</>
	)
}

export default ExpenseForm
