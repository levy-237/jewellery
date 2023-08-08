import React from "react";
import Layout from "./layouts/Layout";
import Welcome from "./pages/Welcome";
import ShopDetail, { loader as dloader } from "./pages/ShopDetail";
import Shop, { loader as jewloader } from "./pages/Shop";
import Cart from "./pages/Cart";
import Location from "./pages/Location";
import { Analytics } from "@vercel/analytics/react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/shop" element={<Layout />}>
        <Route index element={<Shop />} loader={jewloader} />
        <Route path=":id" element={<ShopDetail />} loader={dloader} />
        <Route path="cart" element={<Cart />} />
        <Route path="locations" element={<Location />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} /> <Analytics />
    </>
  );
}

export default App;
