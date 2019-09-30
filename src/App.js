import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import Layout from './components/Layout';
import BadgesHome from './pages/BadgesHome';
import Badges from './pages/Badges';
import BadgeDetailsContainer from './pages/BadgeDetailsContainer'
import BadgeNew from './pages/BadgeNew'
import BadgeEdit from './pages/BadgeEdit'
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={BadgesHome} />
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
            <Route path="/404"component={NotFound}/>
            <Redirect from="*" to="/404"/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
