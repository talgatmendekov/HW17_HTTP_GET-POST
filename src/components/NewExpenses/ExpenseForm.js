import React from 'react'
import './ExpenseForm.css'
import { useCallback, useEffect, useState } from 'react'
import Button from '../UI/Button'
import { BASE_URL } from '../../Helpers/constants'
import Loader from '../UI/Loader'
import { Alert } from '@mui/material'

const ExpenseForm = (props) => {
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const [expenseForm, setExpenseForm] = useState(false)
	const [message, setMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const FetchExpenseHandler = useCallback(async () => {
		setIsLoading(true)
		try {
			const response = await fetch(BASE_URL)
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}
			const data = await response.json()

			const loadedExpenses = []

			for (const key in data) {
				loadedExpenses.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
					date: new Date(data[key].date),
				})
			}
			props.onGetPostData(loadedExpenses)
		} catch (error) {
			setError(error.message)
		}
		setIsLoading(false)
	}, [])

	useEffect(() => {
		FetchExpenseHandler()
	}, [FetchExpenseHandler])

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
		if (userInput.title && userInput.amount && userInput.date) {
			const expensesInfo = {
				title: userInput.title,
				amount: Number(userInput.amount),
				date: userInput.date,
			}

			fetch(BASE_URL, {
				method: 'POST',
				body: JSON.stringify(expensesInfo),
				headers: {
					'content-type': 'application/json',
				},
			})

			setMessage(true)
		} else {
			alert('Fill the inputs')
		}

		setUserInput({
			title: '',
			amount: '',
			date: '',
		})
		setExpenseForm(false)
	}

	let content = <p style={{color: 'red'}}></p>
	 if (error) {
		 content = <Alert severity="error">{error}</Alert> 
	 };

	 if (isLoading) {
		 content = <Loader/>
	 }
	
	 if (message) {
		 content = <Alert>The data was succesfully saved</Alert>
	 }
	const showExpenseFormHandler = () => {
		setExpenseForm(true)
		setMessage('')
		setError('')
	}

	const cancelExpenseFormHandler = () => {
		setExpenseForm(false)
		setUserInput({
			title: '',
			amount: '',
			date: '',
		})
	}

	let expenseContext = ''
	if (expenseForm === true) {
		expenseContext = (
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							name='title' // добавили атрибут name чтобы различать евенты инпутов
							type='text'
							onChange={inputChangeHandler}
							value={userInput.title}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							name='amount'
							onChange={inputChangeHandler}
							type='number'
							value={userInput.amount}
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
							value={userInput.date}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<Button type='submit' onClick={cancelExpenseFormHandler}>
						Cancel
					</Button>
					<Button type='submit' onClick={FetchExpenseHandler}>
						Add New Expense
					</Button>
				</div>
			</form>
		)
	} else {
		expenseContext = (
			<Button onClick={showExpenseFormHandler}>Add Expense</Button>
		)
	}

	return <>{expenseContext}
	<div>
		{content}

	</div>
	</>
}

export default ExpenseForm
