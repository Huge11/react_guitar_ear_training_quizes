import React, {} from 'react';

// components
import { Switch, Route, Redirect } from 'react-router-dom'
// import LandingPage from 'components/pages/LandingPage.js'
import AppLayout from 'components/layout/Layout.js'

function App() {

  return (
    <Switch>
      {/* <Route path="/" exact render={()=><LandingPage />} /> */}
      <Redirect from='/' to='/start' exact />
      <Route path="/" render={()=><AppLayout />} />
    </Switch>


  );
}

export default App;
