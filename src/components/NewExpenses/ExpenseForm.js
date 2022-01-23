import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
	// три состояния для трех рахных инпутов использовал подход slice
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (e) => { // обработчик на событии onChange для трех инпутов 
		const currentInput = e.target.name 
		if (currentInput === 'title') {
			setTitle(e.target.value) // получили значение с инпута title
		} else if (currentInput === 'amount') {
			setAmount(e.target.value) // получили значение с инпута amount
		} else if (currentInput === 'date') {
			setDate(e.target.value) // получили значение с инпута date
		}
	}

	const submitHandler = (e) => { // обработчик события sumbit(отпрвить)
		e.preventDefault() // предотвращает повидение form заданое по умолчанию
        const currentData = { // в константе в ввиде объектов хранятся данные с инпутов 
            title, // если ключ и свойство похожи можно использовать shortcut версию, написать только ключ. React сам поймет что свойство это title
            amount: Number(amount), //использование метода Number для преоброзования Amount в число, так как значение инпута всегда строка.
            date: new Date(date) 
        }
		props.onSaveData(currentData) // передаем данные с наших инпутов в родительский компонент NewExpense вызвав пропс OnSaveData

	}

	return (
		// Мы всегда добавляем прослушиливатель перейдя к элементу JSX . React предоставялет все эти прослушиватели событий как свойства.
		// Например на элемент Form довавили свойство onSubmit и положили в качестве call фукнции обработчик события submit
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title' // добавили атрибут name чтобы различать евенты инпутов 
						type='text'
						onChange={inputChangeHandler}
						value={title} 
					/>	
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						onChange={inputChangeHandler}
						type='number'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						onChange={inputChangeHandler}
						type='date'
						min='2022-01-01'
						max='2025-01-01'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
