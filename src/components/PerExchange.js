import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { formatCash } from './UsersTable';

export const PerExchange = () => {
    const [currency, setCurrency] = useState([])

    useEffect(() => {
        fetch('https://api.coincap.io/v2/assets/bitcoin/markets')
            .then(res => res.json())
            .then(res => setCurrency(res.data))
            .catch(error => console.log('error', error))
    }, [])

    return (
        <div className='table-contaioner'>
            <Table responsive="sm" className='table-style'>
                <thead>
                    <tr>
                        <th>EXCHANGE</th>
                        <th>PAIR</th>
                        <th>VALUME (24H)</th>
                        <th>VALUME (%)</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {currency.map((coin, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{coin.exchangeId}</td>
                                <td>{coin.baseSymbol + '/' + coin.quoteSymbol}</td>
                                <td>${formatCash(coin.volumeUsd24Hr)}</td>
                                <td>{Number(coin.volumePercent / 100).toFixed(6)}%</td>
                                <td>${Number(coin.priceUsd).toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}