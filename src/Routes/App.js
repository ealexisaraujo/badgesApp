import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/badges' component={Badges} />
        <Route exact path='/badges/new' component={BadgeNew} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
