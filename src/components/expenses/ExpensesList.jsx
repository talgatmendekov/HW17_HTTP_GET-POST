import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => { // Компонент ExpenseList принимает данные через props от родительского компонента Expenses

	let expenseContent = ( // поначалу переменная с именем expenseContent хранит в себе h2 элемент с текстом No expense found.
						   // Тоесть если условия с нижу будут не вернеми то на экран выведится текст No expense found.
		<h2 className='expenses-list__fallback'>No expense found</h2>
	)

	if (props.expenses.length > 0) { // условный рендоринг через инструкцию if: если  в массиве есть объект то выведи на экран список затрат за год
		expenseContent = props.expenses.map((expense) => {
			return (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			)
		})
	}

	if (props.select === 'all' && props.items.length > 0) { // если значение фильтра равен 'ALL' и в массиве есть объекте то выведи список затрат за все годы
		expenseContent = props.items.map((el) => {
			return (
				<ExpenseItem
					key={el.id}
					title={el.title}
					amount={el.amount}
					date={el.date}
				/>
			)
		})
	}

	return <ul className='expenses-list'>{expenseContent}</ul> // возвращает значение в зависимости о условий который мы определи перед JSX
}

export default ExpensesList
