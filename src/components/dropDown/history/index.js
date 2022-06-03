import React, { useEffect, useState } from 'react';
import { getAllHistory } from '../../../helper/localServer';

const History = () => {

    const [history, setHistory] = useState({});

    const getHistory = async () => {
        setHistory( await getAllHistory())
    }

    useEffect(() => {
        getHistory();
    },[])

    return (
        <div>
            {Object.keys(history).length > 0 ? (
                <div>
                    <h4>{history.name}</h4>
                    <p>{history.formatted_address}</p>
                </div>
            ) : <p>OOPS! NO HISTORY</p>} 
        </div>
    )
}

export default History;