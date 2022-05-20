import React, { useContext } from 'react'
import { Container } from '../container'
import { Group } from '../group';
import { CountryContext } from '../../context/CountryContext';

export const Results = () => {

    const { data, groupBy } = useContext(CountryContext)

    const groupCountries = (title: string) => {
        switch (groupBy) {
            case 'continents':
                return data?.countries.filter(({ continent }) => continent.name === title)

            case 'languages':
                return data?.countries.filter(({ languages }) => languages.find(({ name }) => name === title))

            default:
                break;
        }
    }

    return (
        <Container>
            {
                (!data)
                    ? (
                        <span>Loading...</span>
                    ) : (
                        data[groupBy].map(({ name, code }) => (
                            <Group key={code} title={name} countries={groupCountries(name)} />
                        ))
                    )
            }
        </Container>
    )
}
