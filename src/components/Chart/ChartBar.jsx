import React from 'react';
import './ChartBar.css'

const ChartBar = (props) => { // через получает данные с родительского компанента Chart
  let barFillHeight = '0%'; // будет показывать насколько колонна будет заполненна в зависимости от расходов. Изначалное значение 0%
  if (props.maxValue > 0){ // если большое нуля то тогда каждый value раздели на общий value и умножь на 100 так мы найдем процент затрат 
      barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%' // props.maxValue - это общий value a props.value - это отдельные value
  }

  return (
      <div className='chart-bar'>
          <div className='chart-bar__inner'>
              <div className='chart-bar__fill' style={{height: barFillHeight}}></div> 
          </div>
          <div className='chart-bar__label'>{props.label}</div>
      </div>
  )
};

export default ChartBar;
