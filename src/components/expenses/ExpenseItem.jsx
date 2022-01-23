import './ExpenseItem.css'
import {ExpenseDate} from './ExpenseDate'

function ExpenseItem(props){ // компонент ExpenseItem принимает данные через пропс от родительского копмонента ExpenseList
    const expenseTitle = props.title // Константа которая хранит статические данные title
    const expenseAmount = props.amount // Константа которая зранит статические данные amount
    
    return(
        <div className='expense-item'>
            
            <ExpenseDate date= {props.date}/>
            <h2 className='expense-item__description'>{expenseTitle}</h2> 
            <div className='expense-item__price'>$ {expenseAmount}</div> 
        </div>
    )
}
export default ExpenseItem