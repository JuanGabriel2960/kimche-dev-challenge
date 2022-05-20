import { Data, GroupBy } from "../interfaces";

export interface CountryState {
    data: Data | null;
    groupBy: GroupBy;
    searchParameter: string;
}

type CountryAction =
    | { type: 'setData', payload: { data: Data } }
    | { type: 'setGroupBy', payload: { groupBy: GroupBy } }
    | { type: 'setSearchParameter', payload: { searchParameter: string } }

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

        default:
            return state;
    }
}