import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51SAS5MBKPJejTEzkgLu5JdiGn2TQnoCPMr0rVRc8TncR1JvTKhue54A3OpzLgmQQTYCF0JZ35xb2oHgMNjh1Z9M800QWnhLBxG"
);

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
         />

         <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must login to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routering;
