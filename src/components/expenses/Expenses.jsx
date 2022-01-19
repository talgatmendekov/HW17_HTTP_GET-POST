import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'
import { useState } from 'react'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.item.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			{filteredExpenses.map((el, index, array) => {
				return (
					<ExpenseItem
						key={Math.random()}
						// key = {el.id}
						title={el.title}
						amount={el.amount}
						date={el.date}
					/>
				)
			})}

			{filteredYear === 'all' &&
				props.item.map((el, index, array) => {
					return (
						<ExpenseItem
							key={Math.random()}
							// key = {el.id}
							title={el.title}
							amount={el.amount}
							date={el.date}
						/>
					)
				})}
		</Card>
	)
}

export default Expenses
