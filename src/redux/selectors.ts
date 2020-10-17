import { IGlobalState } from './state';

interface IRootState extends IGlobalState {}

//export const selectCurrencies = (state: IRootState) => state.currency.currencies;


export const selectCurrency = (state: IRootState) => state.currency;