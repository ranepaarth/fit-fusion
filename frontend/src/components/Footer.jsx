import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'> Fit-Fusion &copy; 2023 | <NavLink to='https://github.com/ranepaarth/fit-fusion' className='ml-2' target='_blank'> ranepaarth</NavLink></footer>
  )
}

export default Footer