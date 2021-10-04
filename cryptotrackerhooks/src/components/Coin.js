import React from 'react';
import './coin.css'

const Coin = ({coin}) => {
    
    
        return (                         

            <div>
                <tr className='coinItem'>
                    <td> {coin.symbol} </td>
                    <td>{coin.name}</td>
                    <td>₹ {coin.current_price} </td>
                    <td>{coin.price_change_24h} Δ</td>
                    <td className={`price ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>{coin.price_change_percentage_24h} %</td>
            
                
                </tr>
                <hr></hr>
            </div>
        
        )
    }
    
    
    
    


export default Coin;