import React from 'react';
import MenuIcon from '../../../assets/menu.png';

const Menu = (props) => {

    const { displayMenu } = props;

    return (
        <div onClick={() => displayMenu()} style={{heigh: '100%', justifyContent: 'center', paddingLeft: '1%'}}>
            <img src={MenuIcon} style={{height: 30, width: 30}} />
        </div>
    )
}

export default Menu;