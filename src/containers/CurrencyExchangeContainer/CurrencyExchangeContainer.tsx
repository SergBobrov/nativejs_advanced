import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose} from 'redux';
import {
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
} from '../../redux/actions';


import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';

interface ICurrencyProps extends CurrencyState {
  ChangeCurrencyFieldAC: (amountOfBYN: string, amountOfCurrency: string) => void;
  ChangeActionAC: (isBuying: boolean) => void;
  changeCurrentCurrencyAC: (currency: string) => void;
}


export const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = ({
                                                                              currencies,
                                                                              currentCurrency,
                                                                              isBuying,
                                                                              amountOfBYN,
                                                                              amountOfCurrency,
                                                                              ChangeCurrencyFieldAC,
                                                                              ChangeActionAC,
                                                                              changeCurrentCurrencyAC,
                                                                            }) => {
  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') {
        if (value === '') {
          ChangeCurrencyFieldAC(value, value);
        } else {
          ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
        }
      } else {
        if (value === '') {
          ChangeCurrencyFieldAC(value, value);
        } else {
          ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency && changeCurrentCurrencyAC(e.currentTarget.dataset.currency);
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};
const mapStateToProps = (state: IGlobalState) => {
  return {
    currencies: state.currency.currencies,
    currentCurrency: state.currency.currentCurrency,
    isBuying: state.currency.isBuying,
    amountOfBYN: state.currency.amountOfBYN,
    amountOfCurrency: state.currency.amountOfCurrency,
  };
};
// @ts-ignore
// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
//   return {
//     setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//       dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//     },
//     setAction(isBuying: boolean) {
//       dispatch(ChangeActionAC(isBuying));
//     },
//     changeCurrency(currency: string) {
//       dispatch(changeCurrentCurrencyAC(currency));
//     },
//   };
// };


export const CurrencyExchangeContainer = compose(connect(mapStateToProps,
  { ChangeCurrencyFieldAC, ChangeActionAC, changeCurrentCurrencyAC},
))
(CurrencyEContainer);
