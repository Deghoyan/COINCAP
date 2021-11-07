import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillCaretUp, AiFillCaretDown,AiOutlineDown,AiOutlineUp } from "react-icons/ai";
import Loader from './Loader'

export const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export const UsersTable = () => {
    const [coins, setCoin] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
            .then(res => res.json())
            .then(res => setCoin(res.data))
            setLoading(false)
     }, [])

    return (
        <div className='table-contaioner'>
            {loading ? <Loader /> : (
                <Table responsive="sm" className='table-style'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>24H CHANGES</th>
                        <th>PRICE</th>
                        <th>MARKET CAP</th>
                        <th>VALUME 24H</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{coin.rank}</td>
                                <td>
                                    <img src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} style={{width:'40px', height:'40px' , marginRight:'.5rem'}}/>
                                    <Link to={`/${coin.name}`} className='coin-style'>{coin.name} • {coin.symbol}</Link></td>
                                <td className={coin.changePercent24Hr > 0 ? 'changePercent-green' : coin.changePercent24Hr < 0 ? 'changePercent-red' : ''}>
                                {coin.changePercent24Hr > 0 ? <AiFillCaretUp /> : coin.changePercent24Hr < 0 ? <AiFillCaretDown /> : ''}
                               {Number(coin.changePercent24Hr).toFixed(2)}</td>
                                <td>${Number(coin.priceUsd).toFixed(2)}</td>
                                <td>{Number(coin.marketCapUsd).toFixed()}</td>
                                <td>${formatCash(coin.volumeUsd24Hr)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            )}
        </div>
    )
}