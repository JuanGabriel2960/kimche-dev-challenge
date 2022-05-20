import { Data, GroupBy } from "../interfaces";
import { Country } from '../interfaces/index';

export interface CountryState {
    data: Data | null;
    groupBy: GroupBy;
    searchParameter: string;
    showCountryDetails: boolean;
    countrySelected: Country | null;
}

type CountryAction =
    | { type: 'setData', payload: { data: Data } }
    | { type: 'setGroupBy', payload: { groupBy: GroupBy } }
    | { type: 'setSearchParameter', payload: { searchParameter: string } }
    | { type: 'openCountryDetails', payload: { country: Country } }
    | { type: 'closeCountryDetails' }

export const countryReducer = (state: CountryState, action: CountryAction): CountryState => {
    switch (action.type) {
        case 'setData':
            return {
                ...state,
                data: action.payload.data,
            }

        case 'setGroupBy':
            return {
                ...state,
                groupBy: action.payload.groupBy,
            }

        case 'setSearchParameter':
            return {
                ...state,
                searchParameter: action.payload.searchParameter,
            }

        case 'openCountryDetails':
            return {
                ...state,
                showCountryDetails: true,
                countrySelected: action.payload.country,
            }

        case 'closeCountryDetails':
            return {
                ...state,
                showCountryDetails: false,
            }

        default:
            return state;
    }
}