import React from 'react'

export default function Button(props) {

    const buttons = props.data;

    return(
        <div className='main--buttons'>
            {buttons.map((el) => <button className={el.name} style={{backgroundColor: el.color}} onClick={()=> window.open(el.link, "_blank")}>{el.name}</button>)}
        </div>
    )
}