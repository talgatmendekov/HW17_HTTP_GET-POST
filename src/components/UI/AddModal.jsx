import React from 'react'
import Button from './Button';




const AddModal = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title' // добавили атрибут name чтобы различать евенты инпутов 
						type='text'
						onChange={props.onChange}
						value={props.title} 
						
					/>	
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						onChange={props.onChange}
						type='number'
						value={props.amount} 
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						onChange={props.onChange}
						type='date'
						min='2022-01-01'
						max='2025-01-01'
						value={props.date} 
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
                <Button  type = 'submit'onClick ={props.onClick}>Cancel</Button>
                <Button  type = 'submit'>Add New Expense</Button>
                
			</div>
		</form>
  )
}

export default AddModal