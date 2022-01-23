import { useState } from 'react' // деструктиризовали хук useState из библиотеки react
import Expenses from './components/expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import './App.css'

const initState = [  // Статические данные (массив с объектами) которые мы вручную создали, так как пока мы еще не работаем с сервером
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

function App() { // Функция App это главный компонент React приложения. В App объединяются все отслальные компоненты.
				// React через метот React.DOM.render(), отрисовывает компонент App. React.DOM(виртуальный DOM реакта).
				// В нашем случае компонент это функция, который возвращает JSXкод(расширения языка JS, который производит элементы React)

	const [expenses, setExpenses]= useState(initState) // деструктиризовали и вызвали useState с изначальным значением (статический массив с объектами)
	const addExpenseDataHandler = (expense)=>{ // Функция (для подъема состояния)которая задается в качестве callback обработчика внутри дочернего компанента NewExpenses
												// // параметр expense - это данные взятые с компоненты NewExpenses через Lifting Up(подъем состояния)
		setExpenses((prevState)=>{ // Вызываем setExpenses используя callback prevState (чтобы предыдущее состояние со статическими данными тоже рендорились)
			return [expense, ...prevState] // возвращаем новые данные(объекты с инпутов) и копируем (разбиваем по частям) через spread опертор наши статические данные с InitState
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
