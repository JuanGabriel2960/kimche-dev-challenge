import { Data, GroupBy } from "../interfaces";

export interface CountryState {
    data: Data | null;
    groupBy: GroupBy;
}

type CountryAction =
    | { type: 'setData', payload: { data: Data } }
    | { type: 'setGroupBy', payload: { groupBy: GroupBy } }

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