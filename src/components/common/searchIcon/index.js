import React from 'react';
import SrcIcon from '../../../assets/search.png';

const SearchIcon = () => {
    return (
        <div style={{heigh: '100%', justifyContent: 'center', paddingLeft: '2%'}}>
            <img src={SrcIcon} style={{height: 30, width: 30}} />
        </div>
    )
}

export default SearchIcon;