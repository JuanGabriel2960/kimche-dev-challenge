import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContext';
import { groupByOptions } from '../../data';
import { Button } from '../button'
import { Container } from '../container'
import './styles.css'
const searchIcon = require("../../assets/search-icon.png")

export const Form = () => {

  const { groupBy, searchParameter, setGroupBy, setSearchParameter } = useContext(CountryContext)

  return (
    <Container>
      <div className='input-container'>
        <img src={searchIcon} alt='search icon' />
        <input className='input' type="text" id="country" name="country" autoComplete='off' placeholder='Search...' onChange={e => setSearchParameter(e.target.value)} value={searchParameter} />
      </div>
      <div className='group-by-container'>
        <h4 className='text-2xl md:text-3xl font-bold text-gray-400'>Group By</h4>
        <div className='button-container'>
          {
            groupByOptions.map((option) => (
              <Button key={option} text={option} onClick={() => setGroupBy(option)} active={groupBy === option} />
            ))
          }
        </div>
      </div>
    </Container>
  )
}
