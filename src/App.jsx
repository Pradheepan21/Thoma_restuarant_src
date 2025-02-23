import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
<<<<<<< HEAD
import FoodDetailScreen from "./components/FoodShowCase/FoodDetail";
import PlaceOrder from "./pages/PlaceOrder";
import SignUp from "./pages/SignUp";
import Navbar from "./components/common/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn";
import OrderSuccessful from "./pages/OrderSuccessful";
=======
import FoodDetailScreen from "./pages/FoodDetail";
import PlaceOrder from "./pages/PlaceOrder";
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433

function App() {
  return (
    <>
<<<<<<< HEAD
     <Navbar />
=======
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/foods/:title" element={<FoodDetailScreen />} />
        <Route path="/place-order" element={<PlaceOrder />} />
<<<<<<< HEAD
        <Route path="/order-successful" element={<OrderSuccessful />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      <Footer />
=======
      </Routes>
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
    </>
  );
}

export default App;
