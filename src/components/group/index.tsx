import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContext';
import { Country } from '../../interfaces/index';

interface Props {
    title: string;
    countries: Country[] | undefined;
}

export const Group = ({ title, countries }: Props) => {

    const { data } = useContext(CountryContext)

    return (
        <div>
            <h3>{title}</h3>
            <div>
                {
                    countries?.map(({ name, capital, code }) => (
                        <li key={code}>{name}</li>
                    ))
                }
            </div>
        </div>
    )
}
