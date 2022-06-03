import React, { useState, useEffect } from 'react';
import RatingIcon from '../../assets/rating.png';
import { addToFavs } from '../../helper/localServer';

const MarkerSelection = (props) => {

    const { placeDetails, close } = props;
    const [isOpen, setIsOpen] = useState(false);

    const addFavsHandler = () => {
        addToFavs(placeDetails);
    }

    const renderType = (type, index) => {
        return (
            <p style={{marginTop: index === 0 ? '7%' : '-7%', fontSize: 10, fontWeight: 'bold', color: 'rgba(0,0,0,0.5)' }}>{type}</p>
        )
    }

    const handleCloseButton = () => {
        close();
    }

    useEffect(() => {
        setIsOpen(placeDetails?.opening_hours?.open_now)
    },[])

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', marginTop: '-31%'}}>
                <div style={{height: 60, width: 60, justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: 50, display: 'flex', position: 'absolute', marginTop: '4.8%'}}>
                    <img style={{height: 30, width: 30}} src={placeDetails.icon} />
                </div>
                <div style={{marginLeft: '30%'}}>
                    <h2 style={{marginTop: '6%', width: window.innerWidth/6 }}>{placeDetails.name}</h2>
                    <p style={{position: 'absolute', top: '27%', width: window.innerWidth/4 }}>{placeDetails.formatted_address}</p>
                </div>
                <h4 style={{position: 'absolute', top: '10%', color: isOpen ? 'green' : 'red', right: window.innerWidth/40 }}>{isOpen ? 'Open Now' : 'Closed'}</h4>
            </div>
            <div style={{position: 'absolute', top: window.innerHeight/7, right: window.innerWidth/40, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <img style={{heigh: 50, width: 50}} src={RatingIcon} />
                <h4>{placeDetails.rating}</h4>
            </div>
            <div style={{position: 'absolute', top: window.innerHeight/6, left: window.innerWidth/20}}>
                {placeDetails.types.map((type, index) => {
                    return renderType(type, index)
                })}
            </div>
            <div onClick={addFavsHandler} style={{width: window.innerWidth/8, height: window.innerHeight/18, backgroundColor: '#822DA7', position: 'absolute', top: window.innerHeight/4.4, right: window.innerWidth/40, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>ADD TO FAVS</p>
            </div>
            <div onClick={(handleCloseButton)} style={{position: 'absolute', top: window.innerHeight/3.7, right: window.innerWidth/13.5}}>
                <p style={{fontSize: 15, color: '#822DA7', fontWeight: 'bold'}}>CLOSE</p>
            </div>
        </div>
    )

}

export default MarkerSelection;

