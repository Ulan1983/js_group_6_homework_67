import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import DoorLock from "./components/DoorLock/DoorLock";

const App = () => (
   <Switch>
     <Route path="/" exact component={DoorLock}/>
   </Switch>
  );


export default App;
