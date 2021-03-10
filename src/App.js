import React, { useState } from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import MainStructure from './components/layouts/MainStructure'

// contexts
import {GlobalContext} from './contexts/contexts'

// hooks
import { 
  useData
} from './hooks/hooks'

// screens
import AboutScreen from './components/layouts/AboutScreen'
import ProjectsScreen from './components/layouts/ProjectsScreen';
import ContactScreen from './components/layouts/ContactScreen';
import NotFoundScreen from './components/layouts/NotFoundScreen';

function App() {

  const [globals, setLanguage, mutateData, toggleLoading] = useData('en')

  const [ active, setActive ] = useState('about')
  const [ modalAnimate, setModal ] = useState(false)
  const [ modalContent, setModalContent ] = useState(null)

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{globals, setLanguage, mutateData, toggleLoading, modalContent, setModalContent, modalAnimate, setModal, setActive, activeLink: active, links: globals.sections}}>
        <MainStructure>
          <Route path='/projects' component={ProjectsScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/404' component={NotFoundScreen} />
          <Route path='/' component={AboutScreen} exact />
          <Route render={() => <Redirect to="/404" />} />
        </MainStructure>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
