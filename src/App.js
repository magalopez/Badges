import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew'
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import BadgesHome from './pages/BadgesHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={BadgesHome} />
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route path="/404"component={NotFound}/>
            <Redirect from="*" to="/404"/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
