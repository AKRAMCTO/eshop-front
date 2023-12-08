import React, { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTopOnMount from "./helpers/ScrollToTopOnMount";
import Loading from "./components/Loading";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

import DynamiquePage from './pages/DynamiquePage';
import PageFailed from "./pages/PageFailed";
import PageSuccess from "./pages/PageSuccess";
import HandleBack from "./helpers/HandleBack";
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

// Page Static
const About = React.lazy(() => import('./pages/Account/About'));
const Contact = React.lazy(() => import('./pages/Account/Contact'));
const Faq = React.lazy(() => import('./pages/Account/Faq'));

// GUEST
const GuestWishlist = React.lazy(() => import('./pages/GuestWishlist'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const PageCheckOrder = React.lazy(() => import('./pages/PageCheckOrder'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter basename="/">
        <ScrollToTopOnMount />
        <HandleBack />
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
          
          <Route path="/a-propos-de-nous" component={About} />
          <Route path="/contactez-nous" component={Contact} />
          <Route path="/centre-d-aide" component={Faq} />
          
          <Route path="/wishlist" component={GuestWishlist} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          
          <Route path="/order-success" component={PageSuccess} />
          <Route path="/order-failed" component={PageFailed} />
          
          <Route path="/check-order" component={PageCheckOrder} />
          
          <ProtectedRoute path="/account/:key?" Component={MyAccount} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
