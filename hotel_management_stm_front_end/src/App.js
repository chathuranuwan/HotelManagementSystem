import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Form from "./Form";
import AddFoods from "./components/AddFoods";
import ManageMenu from "./components/ManageMenu";
import Search from "./components/pages/Search";
import CustomerDetails from "./components/CustomerDetails";
import Form2 from "./Form2";
import Customerview from "./components/Customerview";
import AdminDashboard from "./components/pages/AdminDashboard";
import AdminSidebar from "./components/AdminSidebar";
import RoomsData from "./components/AdminComponents/roomsDatatable/RoomsData";
import About from "./components/pages/About";
import UserRegistration from "./components/pages/UserRegistration";
import AddRoom from "./components/AdminComponents/addRoom/AddRoom";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import EmployeesData from "./components/AdminComponents/EmployeesData";
import Booking from "./components/Booking";
import BookedCustomerDetails from "./components/BookedCustomerDetails";
import BookingTable from "./components/BookingTable";
import OrderedList from "./components/OrderedList";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/nav" element={<Navbar />} />
          <Route path="/myorders" element={<OrderedList />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/services" element={<Services />} />

          <Route path="/menu" element={<Search />} />
          <Route path="/sign-up" element={<Form />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-menu" element={<ManageMenu />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/addfoods" element={<AddFoods />} />
          <Route path="/about" element={<About />} />

          <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route path="/sign-in" element={<Form2 />} />
          <Route path="/orders" element={<Customerview />} />

          <Route path="/sidebar" element={<AdminSidebar />} />

          <Route path="/rooms" element={<RoomsData />} />
          <Route path="/employees" element={<EmployeesData />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booked" element={<BookedCustomerDetails />} />
          <Route path="/listedRooms" element={<BookingTable />} />
          <Route path="/test" element={<Test />} />


        </Routes>
      </Router>
    </>
  );
}
export default App;
