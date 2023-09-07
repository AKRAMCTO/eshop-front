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
const Register = React.lazy(() => import('./pages/Register'))
const Page404 = React.lazy(() => import('./pages/Page404'));
const MyAccount = React.lazy(() => import('./pages/MyAccountContainer'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/page/:page" component={DynamiquePage} />
          <Route path="/page-404" component={Page404} />
          <ProtectedRoute path="/account" Component={MyAccount} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
