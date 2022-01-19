import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (e) => {
		const currentInput = e.target.name
		if (currentInput === 'title') {
			setTitle(e.target.value)
		} else if (currentInput === 'amount') {
			setAmount(e.target.value)
		} else if (currentInput === 'date') {
			setDate(e.target.value)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
        const currentData = {
            title,
            amount,
            date: new Date(date)
        }
		props.onSaveData(currentData)
		console.log(title)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					{/* <input type='text' onChange={titleChangeHandler}/> */}
					<input
						name='title'
						type='text'
						onChange={inputChangeHandler}
						value={title}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					{/* <input type='number' min="0.1" step="1"/> */}
					<input
						name='amount'
						onChange={inputChangeHandler}
						type='number'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					{/* <input type='date' min="2022-01-01" max='2025-01-01'/> */}
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
