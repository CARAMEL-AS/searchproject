import React, { useState } from 'react';
import MenuIcon from '../../../assets/menu.png';


const Menu = () => {

    
    




    return (
        <div onClick={() => alert('Click Menu Button')} style={{heigh: '100%', justifyContent: 'center', paddingLeft: '1%'}}>
            <img src={MenuIcon} style={{height: 30, width: 30}} />
        
        
        </div>
    )
}

export default Menu;