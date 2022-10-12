import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import HeaderReducer from "./HeaderReducer";
import CurrencyExchangerReducer from "./CurrencyExchangerReducer";

export type TAppState = ReturnType<typeof reducers>;
export type TDispatch = ThunkDispatch<TAppState, Promise<void>, AnyAction>;
export type TStore = Store<TAppState, AnyAction> & { dispatch: TDispatch };
export type TGetState = () => TAppState;

let reducers = combineReducers({
    headerCurrency: HeaderReducer,
    currencyExchanger: CurrencyExchangerReducer,
})

const store: TStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
