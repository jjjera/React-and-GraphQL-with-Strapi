import React from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

 const NavigationLinkPage = () => {
    return(
        <div style={{textAlign:'center'}}>
            <NavLink to="/" >Home</NavLink>&nbsp;
            <NavLink to="/cruise" >Cruise_lines</NavLink>&nbsp;
            <NavLink to="/road_ways" >Road_ways</NavLink>&nbsp;
            <NavLink to="/air_ways" >Air_ways</NavLink>
        </div>
    )
}

export default NavigationLinkPage;