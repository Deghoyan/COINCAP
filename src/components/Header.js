import React, { useEffect, useState } from 'react';
import { formatCash } from './UsersTable';


export const Header = ({ currency, props }) => {
    // const [webSite, setWebSite] = useState([])
    // useEffect(() => {
    //     fetch("https://api.coincap.io/v2/exchanges")
    //         .then(res => res.json())
    //         .then(res => setWebSite(res.data))
    //         .catch(error => console.log('error', error))
    // }, [])
    return (
        <div className='header-container'>
            {currency.map((current, index) => {
                return (
                    <div key={index + 1}>
                        {current.name === props.match.params.name ?
                            (
                                <div className='total-info'>
                                    <div className='info'>
                                        <div>
                                            <div style={{ marginBottom: '1.5rem' }}>{current.name} Price ({current.symbol}) <span style={{ borderRadius: '3px', padding: '1px', fontSize: '10px', background: 'orange', color: '#fff' }}>#{current.rank}</span></div>
                                            <span style={{ fontSize: '20px', color: '#595656' }}>${Number(current.priceUsd).toFixed(2)}</span>
                                            <span className={current.changePercent24Hr > 0 ? 'changePercent-green' : current.changePercent24Hr < 0 ? 'changePercent-red' : ''}>
                                                &nbsp;&nbsp;{Number(current.changePercent24Hr).toFixed(2)}
                                            </span>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '12px' }}>Marke Cap ({current.symbol})
                                                <div style={{ fontSize: '14px', marginTop: '.2rem' }}>${formatCash(current.marketCapUsd)}</div>
                                            </div>
                                            <div style={{ fontSize: '12px', marginTop: '.2rem' }}>Valume 24h
                                                <div style={{ fontSize: '14px', marginTop: '.2rem' }}>${formatCash(current.volumeUsd24Hr)}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '12px' }}>Available Supply ({current.symbol})
                                                <div style={{ fontSize: '14px', marginTop: '.2rem' }}>{Number(current.supply)}</div>
                                            </div>
                                            <div style={{ fontSize: '12px', marginTop: '.2rem' }}>Total Supply
                                                <div style={{ fontSize: '14px', marginTop: '.2rem' }}>{Number(current.maxSupply)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='web-site'>
                                        <span>Website</span>
                                        <span className='web'><a href=''>https://{current.id}.org</a></span>
                                    </div>
                                </div>
                            ) : ''}
                    </div>
                )
            })}
        </div>
    )
}