import {useState, useEffect} from 'react';
import './CurrencyExchanger.css';
import CurrencyServices from "../../service/CurrencyService";


const ItemsCurrency = {
    'USD': 0,
    'EUR': 0,
    current: 'USD',
}

function CurrencyExchanger() {
    const currencyServices = new CurrencyServices();
    const [inp1, setInp1] = useState(0);
    const [inp2, setInp2] = useState(0);
    const [currency, setCurrency] = useState(ItemsCurrency);

    useEffect(() => {
        (async () => {
            const res = await currencyServices.getAllCurrency()
            res.filter((item: any) => {
                if (item.cc === 'EUR') {
                    setCurrency((prev) => ({...prev, 'EUR': +item.rate}))
                } else if (item.cc === 'USD') {
                    setCurrency((prev) => ({...prev, 'USD': +item.rate}))
                }
                ;
            });
        })()
    }, []);

    function changeValue(e: any) {
        if (e.target.name === 'input1') {
            // @ts-ignore
            setInp2((e.target.value / currency[currency.current]).toFixed(2))
            setInp1(e.target.value)
        } else if (e.target.name === 'input2') {
            // @ts-ignore
            setInp1((e.target.value * currency[currency.current]).toFixed(2))
            setInp2(e.target.value)
        }
    }

    function changeCurrency(e: any) {
        setCurrency((prev => ({...prev, current: e.target.value})))
        // @ts-ignore
        setInp2((inp1 / currency[e.target.value]).toFixed(2))
    }

    return (
        <div className="parent">
            <div className="box">
                <label htmlFor="input1">
                    <select>
                        <option value="UAH">UAH</option>
                    </select>
                </label>
                <input onChange={changeValue} value={inp1} placeholder='Введите значение' name='input1' type="number"/>
            </div>
            <div className="box">
                <label htmlFor="input2">
                    <select defaultValue={"USD"} onClick={changeCurrency}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </label>
                <input onChange={changeValue} value={inp2} placeholder='Введите значение' name="input2" type="number"/>
            </div>
        </div>

    );
}

export default CurrencyExchanger;