import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee,faSpinner,faref } from '@fortawesome/fontawesome-free-solid'
function NavBar({setState}) {
    fontawesome.library.add(faCheckSquare, faCoffee,faSpinner);
    return (
        <div className='navBar'>
            <button onClick={()=>{
                setState((prev)=>{
                    return{
                        ...prev,
                        indexValue:Math.floor(Math.random()*prev.data.length)
                    }
                })
            }}>Generate a Quote</button>
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    );
}

export default NavBar;