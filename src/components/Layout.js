import React from 'react';
import NavigationLinkPage from './NavigationLinkPage';

 const Layout = (props) => {
    return(
        <div>
            <NavigationLinkPage/>
            {props.children}
        </div>
    )
}

export default Layout;