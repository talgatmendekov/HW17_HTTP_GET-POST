import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) => { // через пропс приходит dataPoints
  const dataPointsValues = props.dataPoints.map((data) => data.value) //  перебираем массив где хранятся только value
  const totalMax = Math.max(...dataPointsValues) // дистуктиризация массива с числами и нахождение максимального значения методом Math.max

  return (
      <div className='chart'> 
          {props.dataPoints.map((dataPoint) => ( // перебирем массив dataPoint(12 объектов который мы создали вручную)
              <ChartBar // вызываем для каждого объекта компонент ChartBar 
                key={dataPoint.label} // ключ чтобы React корректно рендорил 
                value={(dataPoint.value)} // значение каждого объекта(месяца)
                maxValue = {(totalMax)} //максиального значение 
                label = {dataPoint.label} // название месяца
              />
          ))}
      </div>
  )


};

export default Chart;
