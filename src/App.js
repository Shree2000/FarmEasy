import React from 'react';


import './App.css';
import FirstScreen from "./components/firstscreen/firstscreen";
// import { ProtectedRoute } from "./utils/protected_route";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Aboutus from '../src/components/Aboutus/aboutus.component';
import {ProtectedRoute} from './utils/protected_route';
import Farmerfirst from './components/pages/Farmerfirst/farmerfirst.page';
import FarmerUpload from './components/pages/FarmerUpload/farmerupload.component';
import  MyCropList from './components/pages/mycrops/mycrop.component';
import Error404Page from './components/pages/Error404page/error404.component';
import UserScreen from "./components/user_landing_page/user_firstscreen";
import CartOuter from "./components/user_cart/cart_outer";
function App() 
{
  return (
    <BrowserRouter >
    <div className="App">
       <Switch>
       <Route exact path="/" component={FirstScreen} />
        <   ProtectedRoute exact path='/mycrops' component={MyCropList} />
       <  ProtectedRoute exact path='/aboutus' component={Aboutus} />      
        <  ProtectedRoute exact path="/buyer" component={FirstScreen} />
        < ProtectedRoute exact path='/try' component={Farmerfirst} />
        <  ProtectedRoute exact path="/farmer" component={FirstScreen} />
        <  ProtectedRoute exact path='/postacrop' component={FarmerUpload} />
        <Route exact path="/user" component={UserScreen} />
        <Route exact path="/cart" component={CartOuter} />

        <Route path='*' component={Error404Page} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
