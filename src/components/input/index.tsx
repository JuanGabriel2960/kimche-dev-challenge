import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContext';
import { groupByOptions } from '../../data';
import { Button } from '../button'
import { Container } from '../container'
import './styles.css'
const searchIcon = require("../../assets/search-icon.png")

export const Input = () => {

  const { groupBy } = useContext(CountryContext)

  return (
    <Container>
      <div className='input-container'>
        <img src={searchIcon} alt='search icon' />
        <input className='input' type="text" id="country" name="country" placeholder='Search...' />
      </div>
      <div className='group-by-container'>
        <h4>Group By</h4>
        <div className='button-container'>
          {
            groupByOptions.map((option) => (
              <Button key={option} text={option} active={groupBy === option} />
            ))
          }
        </div>
      </div>
    </Container>
  )
}
