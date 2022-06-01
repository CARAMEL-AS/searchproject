import React from 'react';
import ClsIcon from '../../../assets/close.png';
import DisabledClsIcon from '../../../assets/disabledClose.png';

const ClearButton = (props) => {
    return (
        <div onClick={() => props.clear()} style={{heigh: '100%', justifyContent: 'center', paddingLeft: '2%'}}>
            <img src={props.search.length > 0 ? ClsIcon : DisabledClsIcon} style={{height: 25, width: 25}} />
        </div>
    )
}

export default ClearButton;