import React from 'react';
import { CurrencyState } from '../../redux/currencyReducer';
import {
  useDispatch,
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
} from '../../redux/actions';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { useSelector } from 'react-redux';
import {} from '../../redux/selectors';
import { IGlobalState } from '../../redux/state';

interface ICurrencyProps extends CurrencyState {

  // ChangeCurrencyFieldAC: (amountOfBYN: string, amountOfCurrency: string) => void;
  // ChangeActionAC: (isBuying: boolean) => void;
  // changeCurrentCurrencyAC: (currency: string) => void;

}

// : React.FunctionComponent<ICurrencyProps>

export const CurrencyEContainer = (
  // {                                                                           currencies,
  //                                                                             currentCurrency,
  //                                                                             isBuying,
  //                                                                             amountOfBYN,
  //                                                                             amountOfCurrency,
  // ChangeCurrencyFieldAC,
  // ChangeActionAC,
  // changeCurrentCurrencyAC,
  // }
) => {

  const dispatch = useDispatch();

  // const currencies = useSelector(selectCurrencies);
  // const currentCurrency = useSelector(selectCurrentCurrency);
  // const isBuying = useSelector(selectIsBuying);
  // const amountOfBYN = useSelector(selectAmountOfBYN);
  // const amountOfCurrency = useSelector(selectAmountOfCurrency);


  // const { currencies, currentCurrency, isBuying, amountOfBYN, amountOfCurrency } = useSelector(selectCurrency);


  const { currencies, currentCurrency, isBuying, amountOfBYN, amountOfCurrency } = useSelector<IGlobalState, CurrencyState>(state => state.currency);


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
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
        }
      } else {
        if (value === '') {
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
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


// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     currencies: state.currency.currencies,
//     currentCurrency: state.currency.currentCurrency,
//     isBuying: state.currency.isBuying,
//     amountOfBYN: state.currency.amountOfBYN,
//     amountOfCurrency: state.currency.amountOfCurrency,
//   };
// };


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


// export const CurrencyExchangeContainer = connect(mapStateToProps,
//   { ChangeCurrencyFieldAC, ChangeActionAC, changeCurrentCurrencyAC},
// )
// (CurrencyEContainer);
