import './ExpenseForm.css'
import { useState } from 'react'
import AddModal from '../UI/AddModal'
import Button from '../UI/Button'

const ExpenseForm = (props) => {
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const [todoModal, setTodoModal] = useState(false)
	

	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		setUserInput((prevState) => {
			return {
				...prevState,
				[currentInput]: event.target.value,
			}
		})
	}

	

	const submitHandler = (e) => {
		e.preventDefault() // предотвращает повидение form заданое по умолчанию
	
		const currentData = {
			// в константе в ввиде объектов хранятся данные с инпутов
			title: userInput.title, // если ключ и свойство похожи можно использовать shortcut версию, написать только ключ. React сам поймет что свойство это title
			amount: Number(userInput.amount), //использование метода Number для преоброзования Amount в число, так как значение инпута всегда строка.
			date: new Date(userInput.date),
		}
		setUserInput({
			title: '',
			amount: '',
			date: '',
		})
		props.onSaveData(currentData) // передаем данные с наших инпутов в родительский компонент NewExpense вызвав пропс OnSaveData
	}

	const showModalHandler = () => {
		setTodoModal(true)
	}

	const cancelModalHandler = () => {
		setTodoModal(false)
		setUserInput({
			title: '',
			amount: '',
			date: '',
		})
	}

	let modalContext = ''
	if (todoModal === true) {
		modalContext = (
			<AddModal
				onChange={inputChangeHandler}
				onSubmit={submitHandler}
				onClick={cancelModalHandler}
				title={userInput.title} // two-way data binding (передал value как props)
				amount={userInput.amount}
				date={userInput.date}
			/>
		)
	} else {
		modalContext = <Button onClick={showModalHandler}>Add Expense</Button>
	}
	
	return (
		<>
			{modalContext}
			
		</>
	)
}

export default ExpenseForm
