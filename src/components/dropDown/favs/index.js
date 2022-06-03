import React, { useEffect, useState } from 'react';
import { getAllFavs } from '../../../helper/localServer';

const Favs = () => {

    const [favs, setFavs] = useState({});

    const getAllFavorites = async () => {
        setFavs( await getAllFavs())
    }

    useEffect(() => {
        getAllFavorites();
    },[])

    return (
        <div>
            {Object.keys(favs).length > 0 ? (
                <div>
                    <h4>{favs.name}</h4>
                    <p>{favs.formatted_address}</p>
                </div>
            ) : <p>OOPS! NO FAVORITES</p>} 
        </div>
    )
}

export default Favs;