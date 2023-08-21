import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
      <h1 className={el.done?'line':''}>{el.title}</h1>
    </div>
  )
}

export default Card