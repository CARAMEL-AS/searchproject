import React from 'react';
import ClsIcon from '../../../assets/close.png';

const ClearButton = () => {
    return (
        <div onClick={() => alert('Click Clear Button')} style={{heigh: '100%', justifyContent: 'center', paddingLeft: '2%'}}>
            <img src={ClsIcon} style={{height: 25, width: 25}} />
        </div>
    )
}

export default ClearButton;