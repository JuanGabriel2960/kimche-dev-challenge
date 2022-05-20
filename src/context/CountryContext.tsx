import React, { createContext, useEffect, useReducer } from "react";
import { Data, GroupBy } from "../interfaces";
import { countryReducer, CountryState } from './CountryReducer';
import { useQuery } from '@apollo/client';
import GET_DATA from '../graphql/queries'

type CountryContextProps = {
    data: Data | null;
    groupBy: GroupBy;
    searchParameter: string;
    setGroupBy: (groupBy: GroupBy) => void;
    setSearchParameter: (searchParameter: string) => void;
}

const countryInitialState: CountryState = {
    data: null,
    groupBy: GroupBy.continents,
    searchParameter: '',
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

    return (
        <CountryContext.Provider value={{
            ...state,
            setGroupBy,
            setSearchParameter
        }}>
            {children}
        </CountryContext.Provider>
    )
}