import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [ 
      {label: 'Jan', value: 0},
      {label: 'Feb', value: 0},
      {label: 'Mar', value: 0},
      {label: 'Apr', value: 0},
      {label: 'May', value: 0},
      {label: 'Jun', value: 0},
      {label: 'Jul', value: 0},
      {label: 'Aug', value: 0},
      {label: 'Sep', value: 0},
      {label: 'Oct', value: 0},
      {label: 'Nov', value: 0},
      {label: 'Dec', value: 0},
  ]

  for (const expense of props.expenses) { // берем через пропс, expenses - массив с объектами(данные с инпутов) и итерируем через цикл for of
        const expenseMonth = expense.date.getMonth(); // Через метод getMonth() получаем индексы Starting at 0 index (January) 
        chartDataPoints[expenseMonth].value += expense.amount; // вызываем вышесозданный нами массив в качестве значения индекса указываем
                                                         // обращаемся к value который изначально ноль
                                                                // добавляем значение и присваиваем константе chartDataPoints результат
                                                                // PS: значение expense.amount должен быть числом а так с значение с инпута
                                                                // приходит ввиде строки, сработает конкатинация при  втором сложении поэтому
                                                                // в компаненте ExpenseForm значение инпута нужно обернуть в Number!!!!  
        
    }

    
    for (const expense of props.items) { 
        if (props.select ==='all'){
            const expenseMonth = expense.date.getMonth();
            chartDataPoints[expenseMonth].value += expense.amount;
        }
        }
       
    return <Chart dataPoints={chartDataPoints}/> // Через пропс даем dataPoints компаненте Chart  


};


export default ExpensesChart;
