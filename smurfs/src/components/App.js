import React from "react";
import "./App.css";

import SmurfForm from './SmurfForm.js';
import SmurfList from './SmurfList.js';

const App = () => {
  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
