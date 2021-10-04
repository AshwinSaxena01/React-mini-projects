import React, { useState } from 'react';


const SearchBar = (props) => {

    const [term, setTerm] = useState('');
    
    
    const onInputChange = (e) => {       
        setTerm(e.target.value);
        
        
    };
    props.search(term);
    
    
    const onFormSubmit = e => {
        e.preventDefault();
        

        
     }

    return (
        <div className='search-bar ui segment'>
            <form className='ui form'
                onSubmit={onFormSubmit}            
            >
                <div className='field'>
                    <label>Search Cryptocurrency</label>
                    <input
                        type='text'
                        value={term}
                        onChange={onInputChange}
                                   
                    >

                    </input>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
