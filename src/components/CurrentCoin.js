import React, { useEffect, useState } from 'react';
import { PerExchange } from './PerExchange';
import { Header } from './Header';

export const CurrentCoin = (props) => {

    const [cryptoCurrency, setCryptoCurrency] = useState([])

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
            .then(res => res.json())
            .then(res => setCryptoCurrency(res.data))
            .catch(error => console.log('error', error))
    }, [])

    return (
        <>
            <Header currency={cryptoCurrency} props={props} />
            <PerExchange />
        </>

    )
}
