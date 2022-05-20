import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContext';
import { Country } from '../../interfaces/index';
import { Card } from '../card';

interface Props {
    title: string;
    countries: Country[] | undefined;
}

export const Group = ({ title, countries }: Props) => {

    const { data, openCountryDetails } = useContext(CountryContext)

    return (
        <div className={`mb-10 ${countries?.length === 0 && 'hidden'}`}>
            <h3 className='text-4xl md:text-5xl font-bold mb-5'>{title}</h3>
            <div className='flex flex-wrap gap-24 justify-center md:justify-start'>
                {
                    countries?.map((country) => (
                        <Card key={country.code} country={country} onClick={() => openCountryDetails(country)} />
                    ))
                }
            </div>
        </div>
    )
}
