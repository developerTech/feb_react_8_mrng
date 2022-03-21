import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/Details/restDetails';
import PlaceOrder from './component/Booking/placeOrder';
import ViewOrder from './component/Booking/viewBooking';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router;