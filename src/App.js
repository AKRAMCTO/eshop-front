import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = React.lazy(() => import('./pages/Home'))
const DynamiquePage = React.lazy(() => import('./pages/DynamiquePage'));
const Page404 = React.lazy(() => import('./pages/Page404'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/page/:page" element={<DynamiquePage />} />
        <Route path="/page-404" element={<Page404 />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
