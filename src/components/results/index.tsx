import React, { useContext } from 'react'
import { Container } from '../container'
import { Group } from '../group';
import { CountryContext } from '../../context/CountryContext';

export const Results = () => {

    const { data } = useContext(CountryContext)

    return (
        <Container>
            {
                (!data)
                    ? (
                        <span>Loading...</span>
                    ) : (
                        data.languages.map((a: any) => (
                            <Group key={a.name} title={a.name} />
                        ))
                    )
            }
        </Container>
    )
}
