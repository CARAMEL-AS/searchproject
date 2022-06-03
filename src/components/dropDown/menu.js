import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import History from './history';
import About from './about';
import Favs from './favs';

const Menu = () => {

    return (
        <Router>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <nav>
                    <div style={{position: 'absolute', top: window.innerHeight/16, left: window.innerWidth/13, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Link to="/history" style={{fontSize: 20, fontWeight: 'bold'}}>History</Link>
                        <Link to="/favs" style={{marginLeft: '10%', marginRight: '10%', fontSize: 20, fontWeight: 'bold'}}>Favorite</Link>
                        <Link to="/about" style={{fontSize: 20, fontWeight: 'bold'}}>About</Link>
                    </div>
                </nav>
                <div style={{width: '85%', height: 1, position: 'absolute', top: window.innerHeight/9, backgroundColor: 'black', alignSelf: 'center'}}></div>
                <Routes>
                    <Route exact path="/history" element={<History />}/>
                    <Route exact path="/favs" element={<Favs />}/>
                    <Route exact path="/about" element={<About />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Menu;