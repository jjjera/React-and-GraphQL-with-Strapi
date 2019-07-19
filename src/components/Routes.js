import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Cruise from './Cruise';
import RoadWays from './RoadWays';
import AirWays from './AirWays';
import Home from './Home';

const Routes = () => {
    return(
           <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cruise" component={Cruise} />
                    <Route exact path="/road_ways" component={RoadWays} />
                    <Route exact path="/air_ways" component={AirWays} />
                </Switch>
            </BrowserRouter>
            )
}

export default Routes; 