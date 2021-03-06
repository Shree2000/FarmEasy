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
import GovernmentSchemes from './components/pages/govmntSchemes/govmntschemes';
import Recommend from './components/pages/Crop_Rec/crop_rec';
import Deliveryboi from './components/pages/deliveryboy/deliveryboy';
import Orders from './components/user_orders/user_orders';


function App() 
{
  return (
    <BrowserRouter >
    <div className="App">
       <Switch>
       <Route exact path="/" component={FirstScreen} />
        < ProtectedRoute exact path='/mycrops' component={MyCropList} />
       <  Route exact path='/aboutus' component={Aboutus} />      
        < ProtectedRoute exact path="/buyer" component={FirstScreen} />
        < ProtectedRoute exact path='/try' component={Farmerfirst} />
        < ProtectedRoute exact path="/farmer" component={FirstScreen} />
        < ProtectedRoute exact path="/govmntscheme" component={GovernmentSchemes} />
        < ProtectedRoute exact path='/postacrop' component={FarmerUpload} />
        < ProtectedRoute exact path="/user" component={UserScreen} />
        < ProtectedRoute exact path="/cart" component={CartOuter} />
        < ProtectedRoute exact path="/croprec" component={Recommend} />
        < ProtectedRoute exact path="/orders" component={Orders} />
        < Route exact path="/delivery" component={Deliveryboi} />

        <Route path='*' component={Error404Page} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
