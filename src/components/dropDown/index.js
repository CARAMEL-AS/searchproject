import React, { useState, useEffect } from 'react';
import MarkerSelection from './markerSelection';
import Menu from './menu';

const DropDown = (props) => {

    const { selectedPlace, menu, close } = props;
    const [dropDownSize, setDropDownSize] = useState({
        height: 0,
        width: window.innerWidth/3.1
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDropDownSize({
                height: selectedPlace ? window.innerHeight/3 : 0,
                width: window.innerWidth/3.1
            })
        })
    },[])

    useEffect(() => {
        setDropDownSize({
            height: selectedPlace || menu ? window.innerHeight/3 : 0,
            width: window.innerWidth/3.1
        })
    },[selectedPlace, menu])

    return (
        <div style={{
            height: dropDownSize.height,
            width: dropDownSize.width,
            backgroundColor: 'white',
            borderRadius: 10,
            position: 'absolute',
            top: window.innerHeight/15,
            left: window.innerWidth/2.95,
            alignItems: 'center',
            display: 'flex',
            border: '2px solid #822DA7',
            boxShadow: '2px 5px rgba(0,0,0,0.2)',
        }}>
            {selectedPlace && <MarkerSelection placeDetails={selectedPlace} close={close} />}
            {menu && <Menu />}
        </div>
    )
}

export default DropDown;