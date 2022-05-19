import { Data } from "../interfaces";

export interface CountryState {
    data: Data | null;
    groupBy: 'continent' | 'language';
}

type CountryAction =
    | { type: 'setData', payload: { data: Data } }

export const countryReducer = (state: CountryState, action: CountryAction): CountryState => {
    switch (action.type) {
        case 'setData':
            return {
                ...state,
                data: action.payload.data,
            }

        default:
            return state;
    }
}