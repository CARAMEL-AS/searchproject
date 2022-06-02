import React, { useState } from 'react';

const Input = (props) => {




    return (
        
        <input value={props.value}  onChange={props.handleSearch}  placeholder='Search...' style={{
            height: '87%',
            width: '70%',
            borderRadius: 50,
            borderColor: 'rgba(0,0,0,0)',
            fontSize: 20,
            paddingLeft: '1.6%',
            paddingRight: '3%',
            outline: 'none',
            fontWeight: 'bold'
        }} />
    )
}

export default Input;