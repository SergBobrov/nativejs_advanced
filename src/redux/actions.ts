export enum ACTIONS_TYPE {
  CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
  CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
  CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = {
  type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
  payload: {
    amountOfBYN: string,
    amountOfCurrency: string,
  }
};
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
  return {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    payload: { amountOfBYN, amountOfCurrency },
  };
};

export type ChangeAction = {
  type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
  payload: { isBuying: boolean },
};
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
  return {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    payload: { isBuying },
  };

};

export type ChangeCurrentCurrencyType = {
  type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
  payload: { currentCurrency: string },
};
// @ts-ignore
export const changeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
  return {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload: { currentCurrency },
  };

};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;
