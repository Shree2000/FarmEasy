import React from 'react';

import logo from './logo.svg';
import './App.css';
import FirstScreen from "./components/firstscreen/firstscreen";
import { ProtectedRoute } from "./utils/protected_route";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Aboutus from '../src/components/Aboutus/aboutus.component';
import Farmerfirst from './components/pages/Farmerfirst/farmerfirst.page';
import FarmerUpload from './components/pages/FarmerUpload/farmerupload.component';
import  MyCropList from './components/pages/mycrops/mycrop.component';

function App() 
{
  return (
    <BrowserRouter >
    <div className="App">
       <Switch>
       <Route exact path="/" component={FirstScreen} />
        <   Route exact path='/mycrops' component={MyCropList} />
       <  Route exact path='/aboutus' component={Aboutus} />      
        <  Route exact path="/buyer" component={FirstScreen} />
        < Route exact path='/try' component={Farmerfirst} />
        <  Route exact path="/farmer" component={FirstScreen} />
        <  Route exact path='/postacrop' component={FarmerUpload} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
