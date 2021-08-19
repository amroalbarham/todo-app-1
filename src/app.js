import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import SettingProvider from './context/settingContext.js';
import Header from './components/headers/Header';
import ToDo from './components/todo/todo.js';
import SettingsForm from './components/settingsForm/SettingsForm.js';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <SettingProvider>
          <Route exact path='/settings' >
            <SettingsForm />
          </Route>
          <Route exact path='/'>
            <ToDo />
          </Route>
        </SettingProvider>
      </Switch>
    </Router>
  )
}

export default App

