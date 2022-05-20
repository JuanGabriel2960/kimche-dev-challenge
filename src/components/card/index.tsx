import React from 'react'
import { Country } from '../../interfaces'
import './styles.css'
const capitalIcon = require('../../assets/capital-icon.png')
const continentIcon = require('../../assets/continent-icon.png')
const phoneIcon = require('../../assets/phone-icon.png')
const moneyIcon = require('../../assets/money-icon.png')

interface Props {
    country: Country;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Card = ({ country, onClick }: Props) => {
    return (
        <div className='card' onClick={onClick}>
            <img className='rounded-md img' src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`} />
            <h3 className='text-3xl font-bold border-b border-gray-400 pb-3 my-3 whitespace-nowrap text-ellipsis overflow-hidden'>{country.name}</h3>
            <div className='h-40 flex flex-col justify-evenly'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center w-1/2'>
                        <img src={capitalIcon} alt="capital-icon" />
                        <p className='text-2xl ml-3'>{country.capital}</p>
                    </div>
                    <div className='flex items-center w-1/2'>
                        <img src={continentIcon} alt="continent-icon" />
                        <p className='text-2xl ml-3'>{country.continent.name}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center w-1/2'>
                        <img src={phoneIcon} alt="phone-icon" />
                        <p className='text-2xl ml-3'>{country.phone}</p>
                    </div>
                    <div className='flex items-center w-1/2'>
                        <img src={moneyIcon} alt="capital-icon" />
                        <p className='text-2xl ml-3 whitespace-nowrap text-ellipsis overflow-hidden'>{country.currency}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
