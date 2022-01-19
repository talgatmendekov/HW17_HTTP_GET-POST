import { useState } from 'react'
import './ExpenseItem.css'
import {ExpenseDate} from './ExpenseDate'

function ExpenseItem(props){
    // const [title, setTitle] = useState(props.title)
    const expenseTitle = props.title
    const expenseAmount = props.amount
    
   
    // const updateTitleHandler=()=>{
    //     // title = 'updated'  - так не сработает
    //     setTitle('updated')
    //     // console.log(title)
    
    // }
    
    return(
        <div className='expense-item'>
            
            <ExpenseDate date= {props.date}/>
            <h2 className='expense-item__description'>{expenseTitle}</h2>
            <div className='expense-item__price'>{expenseAmount}</div>
            {/* <button onClick={updateTitleHandler}>Update Title</button> */}
        </div>
    )
}
export default ExpenseItem