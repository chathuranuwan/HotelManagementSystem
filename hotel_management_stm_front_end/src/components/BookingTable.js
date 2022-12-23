import React, { useState, useEffect } from "react";
//import "../App.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { Link } from "react-router-dom";

import "./bookingTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const initialFieldValues = {
  customerID: 0,
  roomimageSrc: "",
  roomimageName: "",
  numberOfDays: "",
  totalPrice: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  mobileNumber: "",
  startingDate: "",
  roomStatus: "",
  //startingDate:null,
  roomimageFile: "",
};

export default function BookingTable(props) {
  const [bookedCustomers, setBookedCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState(initialFieldValues);

  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);

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

  useEffect(() => {
    refreshBookingTable();
  }, []);
  const url = "https://localhost:44389/api/BookedCustomer/"
  const bookingTableAPI ={
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };


  const refreshBookingTable = () => {
    bookingTableAPI
      .fetchAll()
      .then((res) => setBookedCustomers(res.data))
      .catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      bookingTableAPI
        .delete(id)
        .then((res) => refreshBookingTable())
        .catch((err) => console.log(err));
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
  };

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("customerID") == "0")
      bookingTableAPI
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshBookingTable();
          console.log('Ok');
        })
        .catch((err) => console.log(err)); 
    else
      bookingTableAPI
        .update(formData.get("customerID"), formData)
        .then((res) => {
          onSuccess();
          refreshBookingTable();
          console.log('Not');
        })
        .catch((err) => console.log(err));
  };

  const changeStatus = (id,bookedCustomer) => {
    
    bookingTableAPI.update(id,bookedCustomer)
    refreshBookingTable()
  };

  return (
    <>
      {/* <AdminNavbar />
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
                      <td>{(bookedCustomer.startingDate).split("T")[0]}</td>
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
      </div> */}

      <AdminNavbar />
      <div>
        <label className="heading">Current Bookings</label>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell className="tableCell">Room</TableCell>
              <TableCell className="tableCell">Booking ID</TableCell>
              <TableCell className="tableCell">First Name</TableCell>
              <TableCell className="tableCell">Last Name</TableCell>
              <TableCell className="tableCell">Booking Date</TableCell>
              <TableCell className="tableCell">Number of Days</TableCell>
              <TableCell className="tableCell">Total Charge</TableCell>
              <TableCell className="tableCell">Email Address</TableCell>
              <TableCell className="tableCell">Mobile No</TableCell>
              <TableCell className="tableCell">Status</TableCell>
              <TableCell className="tableCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookedCustomers.map((bookedCustomer, idx) => (
              <TableRow key={bookedCustomer.customerID}>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src={bookedCustomer.roomimageSrc}
                      alt=""
                      className="image"
                    />
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.customerID}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.firstName}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.lastName}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.startingDate.split("T")[0]}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.numberOfDays}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.totalPrice}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.emailAddress}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.mobileNumber}
                </TableCell>
                <TableCell className="tableCell">
                  {bookedCustomer.roomStatus}
                </TableCell>
                <TableCell className="tableCell">
                  <div className="cellAction">
                    
                      <button className="approveButton"
                        onClick={() => {
                          const bookedCusto = {
                            customerID:bookedCustomer.customerID,
                            roomimageSrc:bookedCustomer.roomimageSrc,
                            firstName:bookedCustomer.firstName,
                            lastName:bookedCustomer.lastName,
                            startingDate:bookedCustomer.startingDate,
                            numberOfDays:bookedCustomer.numberOfDays,
                            totalPrice:bookedCustomer.totalPrice,
                            emailAddress:bookedCustomer.emailAddress,
                            mobileNumber:bookedCustomer.mobileNumber,
                            roomStatus:"Approved"
                          }
                
                          changeStatus(bookedCustomer.customerID,bookedCusto);
                        }}
                      >
                        Approve
                      </button>
                    

                    <div className="declineButton">Decline</div>

                    <div
                      className="deleteButton"
                      onClick={() =>
                      onDelete(parseInt(bookedCustomer.customerID))
                      }
                    >
                      Delete
                    </div>
                  </div>
                </TableCell>
                {/* <TableCell className="tableCell">
                      <span className={`status ${row.status}`}>{row.status}</span>
                    </TableCell>  */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
