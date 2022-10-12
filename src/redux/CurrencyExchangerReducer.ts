import {AnyAction, Dispatch} from "redux";

const SET_CURRENCY_NAME = 'SET_CURRENCY_NAME'

const initialState = {
    CurrecyName: [],
}

const HeaderReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENCY_NAME:
            return {...state, CurrecyName: action.headerCurrncy}
        default:
            return state
    }
}

export const setCurrecyName = (CurrecyName: any) => ({type: SET_CURRENCY_NAME, CurrecyName})
export default HeaderReducer