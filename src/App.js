import { useState } from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import './App.css'

const initState = [
	{
		id: 0,
		title: 'House Rent',
		amount: 2000,
		date: new Date(2022, 12, 5),
	},
	{
		id: 1,
		title: 'Car Insuranse',
		amount: 1000,
		date: new Date(2024, 5, 8),
	},
	{	id: 2, title: 'Utilities', 
		amount: 300, 
		date: new Date(2025, 6, 9) },
	{
		id: 3,
		title: 'Healthcare',
		amount: 200,
		date: new Date(2023, 3, 10),
	},
]

function App() {

	const [expenses, setExpenses]= useState(initState)
	const addExpenseDataHandler = (expense)=>{
		setExpenses((prevState)=>{
			return [expense, ...prevState]
		});
	}

	return (
		<div className='App'>
			<NewExpenses onAddExpense={addExpenseDataHandler}/>
			<Expenses item={expenses} />
		</div>
	)
}

export default App
