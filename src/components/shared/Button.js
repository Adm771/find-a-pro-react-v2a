import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className='btn1' onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
