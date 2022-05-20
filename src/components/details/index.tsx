import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContext';
import './styles.css'
const arrowIcon = require('../../assets/arrow-icon.png')

export const Details = () => {

    const { showCountryDetails, countrySelected, closeCountryDetails } = useContext(CountryContext)

    return (
        <div className={`overlay ${showCountryDetails && 'active'}`} onClick={() => closeCountryDetails()}>
            <div className={`modal country-details ${showCountryDetails && 'active'}`} onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between items-center'>
                    <button onClick={() => closeCountryDetails()}>
                        <img src={arrowIcon} alt='arrow-icon' />
                    </button>
                    <h2 className='text-4xl font-bold'>{countrySelected?.name}</h2>
                    <span></span>
                </div>
                <div className='flex justify-between items-center my-10'>
                    <div className='text-center'>
                        <h4 className='font-bold'>{countrySelected?.capital}</h4>
                        <span>Capital</span>
                    </div>
                    <div className='text-center'>
                        <h4 className='font-bold'>{countrySelected?.continent.name}</h4>
                        <span>Continent</span>
                    </div>
                    <div className='text-center'>
                        <h4 className='font-bold'>{countrySelected?.phone}</h4>
                        <span>Phone</span>
                    </div>
                </div>
                <img className='rounded-md w-full h-96' src={`https://flagcdn.com/w320/${countrySelected?.code.toLowerCase()}.png`} />
                <div className={`mt-10 ${countrySelected?.languages.length === 0 && 'hidden'}`}>
                    <h4 className='font-bold'>Languages</h4>
                    {
                        countrySelected?.languages.map(({ name }) => (
                            <li className='ml-4 text-2xl' key={name}>{name}</li>
                        ))
                    }
                </div>
                <div className={`mt-10 ${countrySelected?.states.length === 0 && 'hidden'}`}>
                    <h4 className='font-bold'>States</h4>
                    {
                        countrySelected?.states.map(({ name }) => (
                            <li className='ml-4 text-2xl' key={name}>{name}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
