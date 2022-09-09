import React from 'react';
import {Link} from 'react-scroll';

function NavButton(prop: any) {
    return (  
        <div>
            <Link to={prop.scroll_tgt} spy={true} smooth={true} duration={500} className=' 
            font-roboto-mono font-semibold text-lg text-ui-back-space-blue
             hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>{prop.name}</Link>
        </div>
    )
}

export default NavButton;