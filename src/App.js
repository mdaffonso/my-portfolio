import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainStructure from './components/layouts/MainStructure'

// contexts
import {GlobalProvider} from './contexts/contexts'
import { HelmetProvider } from 'react-helmet-async';

// screens
import AboutScreen from './components/layouts/AboutScreen'
import ProjectsScreen from './components/layouts/ProjectsScreen';
import ContactScreen from './components/layouts/ContactScreen';
import NotFoundScreen from './components/layouts/NotFoundScreen';
import SkipNavigation from './components/SkipNavigation';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider context={{}}>
        <GlobalProvider>
          <SkipNavigation />
          <MainStructure>
            <Switch>
              <Route path='/projects' component={ProjectsScreen} />
              <Route path='/contact' component={ContactScreen} />
              <Route path='/about' component={AboutScreen} />
              <Route path='/' component={AboutScreen} exact />
              <Route component={NotFoundScreen} />
            </Switch>
          </MainStructure>
        </GlobalProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
