import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Routes from '../src/components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Route component={Routes}/>
    </BrowserRouter>
  );
}

export default App;
