import { Routes,Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Pant from "../Pages/Pant";
import Shirt from "../Pages/Shirt";
import SingleProduct from "../Pages/SingleProduct";
import Tshirt from "../Pages/Tshirt";
import Signup from "../Pages/Signup";
import Address from "../Pages/Address";
import Payment from "../Pages/Payment";


function AllRoutes() {
    return (
      <Routes >
        <Route path="/" element={<Homepage />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/shirt" element={<Shirt />} ></Route>
        <Route path="/shirt/:id" element={<SingleProduct />} ></Route>
        <Route path="/tshirt" element={<Tshirt />} ></Route>
        <Route path="/pant" element={<Pant /> } ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
        <Route path="/address" element={<Address />} ></Route>
        <Route path="/payment" element={<Payment />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    );
  }
  
  export default AllRoutes;