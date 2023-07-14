import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>E-commerce home page</h1>} />
          <Route path="/add" element={<h1>Add product component page</h1>} />
          <Route
            path="/update"
            element={<h1>update product component page</h1>}
          />
          <Route path="/logout" element={<h1> Logout page</h1>} />
          <Route path="/profile" element={<h1> profile page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
