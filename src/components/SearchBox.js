import React from 'react'
import './SearchBox.css'

export const SearchBox = ({searchChange}) => {
    // const {name, email, id} = props;
    return (
        <div>
            <input id="searchBox" type='number' placeholder='Give an ID' onChange={searchChange}/>
        </div>
    );
}

