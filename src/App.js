import React, { Suspense } from "react";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Loading from './helpers/Loading';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = React.lazy(() => import('./pages/Home'))
const DynamiquePage = React.lazy(() => import('./pages/DynamiquePage'));
const Page404 = React.lazy(() => import('./pages/Page404'));


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/page/:page",
//     element: <DynamiquePage />,
//   },
//   {
//     path: "page-404",
//     element: <Page404 />,
//   },
// ]);



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/page/:page" element={<DynamiquePage />} /> */}
        {/* <Route path="/page-404" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
