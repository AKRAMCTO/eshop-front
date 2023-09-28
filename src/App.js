import React, { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./components/Loading";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

import DynamiquePage from './pages/DynamiquePage';
const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'))
const RegisterSeller = React.lazy(() => import('./pages/RegisterSeller'))
const Register = React.lazy(() => import('./pages/Register'))
const Page404 = React.lazy(() => import('./pages/Page404'));
const MyAccount = React.lazy(() => import('./pages/MyAccountContainer'));
const Product = React.lazy(() => import('./pages/Product'));
const Products = React.lazy(() => import('./pages/Products'));

// GUEST
const GuestWishlist = React.lazy(() => import('./pages/GuestWishlist'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/devenir-vendeur" component={RegisterSeller} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/page/:page" component={DynamiquePage} />
          <Route path="/product/:product" component={Product} />
          <Route path="/products" component={Products} />
          <Route path="/page-404" component={Page404} />
          
          <Route path="/wishlist" component={GuestWishlist} />
          
          <ProtectedRoute path="/account/:key?" Component={MyAccount} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
