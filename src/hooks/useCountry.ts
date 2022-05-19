import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GET_DATA from '../graphql/queries'

export const useCountry = () => {

    const { error, loading, data } = useQuery(GET_DATA)

    const [countries, setCountries] = useState([])
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        if (data) {
            setCountries(data.countries)
            setLanguages(data.languages)
        }
    }, [data])

    return {
        countries,
        languages
    }

}