import React from 'react'
import './Card.css'

function Card(props){ // компонент который не несет логику отвечает только за обертку"
    const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div> // props.children контент между открывающим и закрывающим тегом компонента
    )
}

export default Card