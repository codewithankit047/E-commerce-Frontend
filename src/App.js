import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./Component/Footer";
import SignUp from "./Component/Signup";
import Home from "./Component/Home";
import PrivateRoute from "./Component/PrivateRoute";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import AddProduct from "./Component/Product/AddProduct";
import UpdateProduct from "./Component/Product/updateProduct";
import Profile from "./Component/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
