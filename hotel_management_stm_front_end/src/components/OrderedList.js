import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../Navbar";
import axios from "axios";
import jwt from "jwt-decode";
import { Label } from "@mui/icons-material";
import { background } from "@chakra-ui/react";
import { FormControlUnstyledContext } from "@mui/base";

export default function OrderedList(props) {
  const { addOrEdit, recordForEdit } = props;

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const setData3 = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = jwt(token);
      return tokenData.Id;
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:44389/api/customer/${setData3()}`)
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <div className="table-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Username</th>
                  <th>Number of Items</th>
                  <th>Total Charge</th>

                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, idx) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={customer.foodimageName}
                          className="cart3-img-top "
                        />
                      </td>
                      <td>{customer.firstName}</td>
                      <td>{customer.numberOfItems}</td>
                      <td>{customer.totalPrice}</td>
                      <td>{customer.status ? "Accept" : "Pending"}</td>
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
