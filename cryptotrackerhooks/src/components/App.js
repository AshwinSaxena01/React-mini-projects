import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import Coin from './Coin';


const App = () => {

    const [coinList, setCoinList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

    

    useEffect(() => {
        getCoinData();
        
    }, [])
    
    const getCoinData = async () => {
        const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        
        
        setCoinList(data);

        
    };
    
    
    const search = (term) => {
        setSearchTerm(term);
    }
    
       
        
        const filteredCoins = coinList.filter((coin) =>
               coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
            
         
        
    
    
    
   
    
        

    return (
        <div className='ui container'> 
            <SearchBar search={search}/>
            
            <div className='coinTable'>
                {filteredCoins.map((coin => {
                    return (
                        <Coin coin={coin}/>
                    )
                }
                )
                )
                }
                
            </div>
            
    
        </div>
    );


}

export default App;
