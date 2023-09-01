import React, { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./components/Loading";

const Home = React.lazy(() => import('./pages/Home'))
const DynamiquePage = React.lazy(() => import('./pages/DynamiquePage'));
const Page404 = React.lazy(() => import('./pages/Page404'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page/:page" component={DynamiquePage} />
          <Route path="/page-404" component={Page404} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
