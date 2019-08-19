import React from 'react';
import './search-box.styles.css';

//functional component receives props and returns html
//useful when do not need internal state or access to lifecycle methods

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        type='search' 
        placeholder= { placeholder }
        onChange={handleChange}
  />
 
)