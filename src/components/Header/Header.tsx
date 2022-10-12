import {useState, useEffect} from 'react';

import '../Header/Header.css';

import decoration from '../../components/resources/img/money.png';
import CurrencyServices from "../../service/CurrencyService";



function HeaderCurrency() {
    const currencyServices = new CurrencyServices();
    const [currensyUSD, setCurrensyUSD] = useState();
    const [currencyEUR, setCurrensyEUR] = useState();

    useEffect(() => {
        currencyServices.getAllCurrency()
            .then((res: any) => res.filter((item: any) => {
                if (item.cc === 'USD') {
                    setCurrensyUSD(item.rate)
                }
                ;
            }));
    });

    useEffect(() => {
        currencyServices.getAllCurrency()
            .then((res: any) => res.filter((item: any) => {
                if (item.cc === 'EUR') {
                    setCurrensyEUR(item.rate)
                }
                ;
            }));
    });

    return (
        <div className="container">
            <h2 className="text">Актуальний курс валют:</h2>
            <div className="containerInf">
                <h2 className="information text">USD: <span className='col'>{currensyUSD}</span></h2>
                <h2 className="information text">EUR: <span className='col'>{currencyEUR}</span></h2>
            </div>
            <img className="bg-decoration" src={decoration} alt="money"/>
        </div>
    );
}

export default HeaderCurrency;
