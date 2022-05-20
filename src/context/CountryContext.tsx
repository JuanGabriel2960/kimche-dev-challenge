import React, { createContext, useEffect, useReducer } from "react";
import { Data, GroupBy } from "../interfaces";
import { countryReducer, CountryState } from './CountryReducer';
import { useQuery } from '@apollo/client';
import GET_DATA from '../graphql/queries'
import { Country } from '../interfaces/index';

type CountryContextProps = {
    data: Data | null;
    groupBy: GroupBy;
    searchParameter: string;
    showCountryDetails: boolean;
    countrySelected: Country | null;
    setGroupBy: (groupBy: GroupBy) => void;
    setSearchParameter: (searchParameter: string) => void;
    openCountryDetails: (country: Country) => void;
    closeCountryDetails: () => void;
}

const countryInitialState: CountryState = {
    data: null,
    groupBy: GroupBy.continents,
    searchParameter: '',
    showCountryDetails: false,
    countrySelected: null
}

export const CountryContext = createContext({} as CountryContextProps)

export const CountryProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(countryReducer, countryInitialState)
    const { error, loading, data } = useQuery(GET_DATA)

    useEffect(() => {
        if (data) {
            setData();
        }
    }, [data])

    const setData = () => {
        dispatch({
            type: 'setData',
            payload: {
                data: data
            }
        })
    }

    const setGroupBy = (groupBy: GroupBy) => {
        dispatch({
            type: 'setGroupBy',
            payload: {
                groupBy
            }
        })
    };

    const setSearchParameter = (searchParameter: string) => {
        dispatch({
            type: 'setSearchParameter',
            payload: {
                searchParameter
            }
        })
    };

    const openCountryDetails = (country: Country) => {
        dispatch({
            type: 'openCountryDetails',
            payload: {
                country
            }
        })
    }

    const closeCountryDetails = () => {
        dispatch({
            type: 'closeCountryDetails',
        })
    }

    return (
        <CountryContext.Provider value={{
            ...state,
            setGroupBy,
            setSearchParameter,
            openCountryDetails,
            closeCountryDetails
        }}>
            {children}
        </CountryContext.Provider>
    )
}