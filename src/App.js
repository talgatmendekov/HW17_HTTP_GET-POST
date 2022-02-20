import {Fragment, useState } from 'react' // деструктиризовали хук useState из библиотеки react
import Expenses from './components/expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import './App.css'


function App() { 

	const [expenses, setExpenses]= useState([]);
	


	const getExpenseHandler=(expenseData)=>{
		
		setExpenses(expenseData)
		console.log(expenseData)
		
	}

	return (
		<Fragment>
			<NewExpenses onGetExpense={getExpenseHandler}/> 
			<Expenses item={expenses} />
		</Fragment>
	)
}

export default App
// 