export enum ACTIONS_TYPE {
  CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
  CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
  CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = {

};
// @ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {

};

export type ChangeAction = {

};
// @ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {

};

export type ChangeCurrentCurrencyType = {

};
// @ts-ignore
export const changeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {

};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;
