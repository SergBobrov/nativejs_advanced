import { ACTIONS_TYPE, CurrencyReducersTypes } from './actions';

type CurrencyType = {
  currencyName: string;
  buyRate: number;
  sellRate: number;
};
export type CurrencyState = {
  currencies: Array<CurrencyType>;
  currentCurrency: string;
  isBuying: boolean;
  amountOfBYN: string;
  amountOfCurrency: string;
};

const initialState: CurrencyState = {
  currencies: [
    {
      currencyName: 'USD',
      buyRate: 2.62,
      sellRate: 2.58,
    },
    {
      currencyName: 'EUR',
      buyRate: 3.1,
      sellRate: 3.06,
    },
    {
      currencyName: 'RUR',
      buyRate: 0.0345,
      sellRate: 0.0341,
    },
  ],
  currentCurrency: 'USD',
  isBuying: true,
  amountOfBYN: '',
  amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
  // @ts-ignore
  switch (action.type) {
    default:
      return state;
  }
};
