import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import SignUp from "./Component/Signup";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/dashboard"
            element={<h1>E-commerce Dashboard page</h1>}
          />
          <Route path="/add" element={<h1>Add product component page</h1>} />
          <Route
            path="/update"
            element={<h1>update product component page</h1>}
          />
          <Route path="/logout" element={<h1> Logout page</h1>} />
          <Route path="/profile" element={<h1> profile page</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
