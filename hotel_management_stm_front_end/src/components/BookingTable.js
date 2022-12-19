import React, { useState, useEffect } from "react";
import "../App.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BookingTable(props) {
  const { addOrEdit, recordForEdit } = props;

  const [bookedCustomers, setBookedCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/BookedCustomer/")
      .then((res) => {
        setBookedCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() =>{
    refreshBookingTable();
  }, [])

  const bookingTableAPI = (url = 'https://localhost:44389/api/BookedCustomer/') =>{
    return{
        fetchAll: () => axios.get(url),
        delete: id => axios.delete(url + id)
      }
  }

  const refreshBookingTable =()=>{
    bookingTableAPI().fetchAll()
    .then(res=>setBookedCustomers(res.data))
    .catch(err => console.log(err))
  }
  
   const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      bookingTableAPI()
        .delete(id)
        .then((res) => refreshBookingTable())
        .catch((err) => console.log(err));
  }

  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <div className="table-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Customer ID</th>
                  <th>Starting Date</th>
                  <th>Number of Days</th>
                  <th>Total Charge</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Mobile Number</th>
                  
                </tr>
              </thead>
              <tbody>
                {bookedCustomers.map((bookedCustomer, idx) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={bookedCustomer.roomimageSrc}
                          className="cart3-img-top "
                        />
                      </td>
                      <th>{bookedCustomer.customerID}</th>
                      <td>{bookedCustomer.startingDate}</td>
                      <td>{bookedCustomer.numberOfDays}</td>
                      <td>{bookedCustomer.totalPrice}</td>
                      <td>{bookedCustomer.firstName}</td>
                      <td>{bookedCustomer.lastName}</td>
                      <td>{bookedCustomer.emailAddress}</td>
                      <th>{bookedCustomer.mobileNumber}</th>

                      <td>
                        <Link class="" to="" onClick={()=>onDelete(parseInt(bookedCustomer.customerID))}>
                          <i class="fa fa-trash" aria-hidden="true"></i> 
                        </Link>
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
