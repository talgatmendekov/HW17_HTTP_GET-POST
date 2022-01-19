import Expenses from './components/expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import './App.css'

function App() {
	const expenses = [
		{
			id: 0,
			title: 'House Rent',
			amount: 1000,
			date: new Date(2021, 12, 5),
		},
		{
			id: 1,
			title: 'Car Insuranse',
			amount: 1000,
			date: new Date(2020, 5, 8),
		},
		{ id: 2, title: 'Utilities', amount: 1000, date: new Date(2022, 6, 9) },
		{
			id: 3,
			title: 'Healthcare',
			amount: 1000,
			date: new Date(2021, 3, 10),
		},
	]


	return (
		<div className='App'>
			<NewExpenses/>
			<Expenses item={expenses}
			/>
			
		</div>
	)
}

export default App
