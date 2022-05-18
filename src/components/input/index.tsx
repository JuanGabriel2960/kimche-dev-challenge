import React from 'react'
import { Container } from '../container'
import './styles.css'
const searchIcon = require("../../assets/search-icon.png")

export const Input = () => {
  return (
    <Container>
      <div className='input-container'>
        <img src={searchIcon} alt='search icon' />
        <input className='input' type="text" id="country" name="country" placeholder='Search...' />
      </div>
    </Container>
  )
}
