import {AnyAction, Dispatch} from "redux";

const SET_CURRENCY = 'SET_CURRENCY'

const initialState = {
    headerCurrecy: [],
}

const HeaderReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {...state, headerCurrecy: action.headerCurrncy}
        default:
            return state
    }
}

export const setCurrency = (headerCurrecy: any) => ({type: SET_CURRENCY, headerCurrecy})
export default HeaderReducer