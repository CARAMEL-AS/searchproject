import React, { useEffect, useState } from 'react';
import Input from '../common/input';
import SearchIcon from '../common/searchIcon';
import ClearButton from '../common/clear';
import Menu from '../common/menu';

const SearchBar = (props) => {

    const { search, handleSearch, clearSearch } = props;
    const [barSize, setBarSize] = useState({
        height: window.innerHeight/12,
        width: window.innerWidth/3
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setBarSize({
                height: window.innerHeight/12,
                width: window.innerWidth/3
          })
        })
    },[])

    return (
        <div style={{
            height: barSize.height,
            width: barSize.width,
            backgroundColor: 'white',
            borderRadius: 50,
            position: 'absolute',
            top: window.innerHeight/50,
            left: window.innerWidth/3,
            alignItems: 'center',
            display: 'flex',
            border: '2px solid #822DA7',
            boxShadow: '2px 5px rgba(0,0,0,0.2)'
        }}>
            <SearchIcon />
            <Input value={search} handleSearch={handleSearch} />
            <ClearButton search={search} clear={clearSearch} />
            <Menu />
        </div>
    )
}

export default SearchBar;