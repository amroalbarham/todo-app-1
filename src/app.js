import React from 'react';
import SettingProvider from './context/settingContext.js';
import ToDo from './components/todo/todo.js';

function App() {
  return (
    <SettingProvider>
      <ToDo />
    </SettingProvider>
  )
}

export default App

  