import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Form from "./Form";
import AddFoods from "./components/AddFoods";
import ManageMenu from "./components/ManageMenu";
import Search from "./components/pages/Search";
import CustomerDetails from "./components/CustomerDetails";
import SignIn from "./components/pages/SignIn";
import Form2 from "./Form2";
import Customerview from "./components/Customerview";
import AdminDashboard from "./components/pages/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />

          <Route path="/menu" element={<Search />} />
          <Route path="/sign-up" element={<Form />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-menu" element={<ManageMenu />} />
          <Route path="/addfoods" element={<AddFoods />} />

          <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route path="/sign-in" element={<Form2 />} />
          <Route path="/orders" element={<Customerview />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
