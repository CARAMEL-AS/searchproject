import React, { useState, useEffect } from 'react';

const DropDown = (props) => {

    const { display } = props; // Display can be true or false, if false, then hide it by height back to 0, otherwise show it by height to what ever number suits it.
    const [dropDownHeight, setDropDownHeight] = useState(true);

    useEffect(() => {
        setDropDownHeight(display ? 20 : 0) // not sure what number will look better, 20 is just an example
    },[display]) // everytime display value changes, useEffect will render the page again. 
    // lets say, if display is false by default and value changes to true, useEffect will make it's action and set DropHeight 20 or whatever value we choose
    // if value changes to false from true, then setDropHeight will change back to 0


    

    return (
        <dib style={{height: dropDownHeight}}>
            <button>
                
            </button>

    
    
        </dib>
    )

}

export default DropDown;

{/* here we will display buttons for navbar, example menu, history, favorites */}