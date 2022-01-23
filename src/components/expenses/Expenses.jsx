import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'
import { useState } from 'react' // импортировали кух useState(специальная функция, позволяющая добовлять состоние к компонентам )
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022') //деструктиризовали и вызвали useState.
															// Первый элемент это значение который будет менятся.
															// Второй элемент это функция который сообщает Реакту что мы собираемся изменить FilderedYear

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	} // метод который используется внутри компоненты ExpensesFilter вызывается как пропс для получения данных

	const filteredExpenses = props.item.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	}) // переменная которая возвращает массив с объектами которые равны выборке по годам(так как метод массива filter возвращает нам новыймассив)

	return (
		<Card className='expenses'>
			<ExpensesFilter // Компонент который отвечает выбор по годам
				selected={filteredYear} 	
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} /> 
			<ExpensesList // Компонент который отвечает за список расходов
				expenses={filteredExpenses}
				select={filteredYear}
				items={props.item}
			/>
		</Card>
	)
}

export default Expenses
