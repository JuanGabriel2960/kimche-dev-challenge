import React, { useContext } from 'react'
import { Container } from '../container'
import { Group } from '../group';
import { CountryContext } from '../../context/CountryContext';

export const Results = () => {

    const { data, groupBy, searchParameter } = useContext(CountryContext)

    const groupCountries = (title: string) => {
        switch (groupBy) {
            case 'continents':
                return data?.countries.filter(({ continent, name }) => continent.name === title && name.match(new RegExp(searchParameter, "i")))

            case 'languages':
                return data?.countries.filter(({ languages, name }) => languages.find(({ name }) => name === title) && name.match(new RegExp(searchParameter, "i")))

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
