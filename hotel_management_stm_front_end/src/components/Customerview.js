import React, { useState, useEffect } from "react";
import "../App.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { width } from "@mui/system";

export default function Customerview(props) {
  const { addOrEdit, recordForEdit } = props;

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/customer/")
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const coniremItem = (data) => {
    data.status = !data.status;
    axios
      .put(`https://localhost:44389/api/customer/${data.userNumber}`, data)
      .then((res) => {
        setLoading(false);
      });
  };

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
                  <th style={{ width: "80px" }}>Food Item</th>
                  <th>Number of Items</th>
                  <th>Total Charge</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Mobile Number</th>
                  <th>Room Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, idx) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={customer.foodimageSrc}
                          className="cart3-img-top "
                        />
                      </td>
                      <td>{customer.numberOfItems}</td>
                      <td>{customer.totalPrice}</td>
                      <td>{customer.firstName}</td>
                      <td>{customer.lastName}</td>
                      <td>{customer.emailAddress}</td>
                      <th>{customer.mobileNumber}</th>
                      <th>{customer.roomNumber}</th>
                      <>
                        <th>
                          <button onClick={() => coniremItem(customer)}>
                            {customer.status ? "Unconfirem" : "Confirem"}
                          </button>
                        </th>
                      </>
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
