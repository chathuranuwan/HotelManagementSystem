import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../Navbar";
import axios from "axios";
import jwt from "jwt-decode";
import { Label } from "@mui/icons-material";
import { background } from "@chakra-ui/react";
import { FormControlUnstyledContext } from "@mui/base";
import "./bookingTable.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CustomerViewBooking(props) {
  const { addOrEdit, recordForEdit } = props;

  const [bookedCustomers, setBookedCustomers] = useState([]);
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
      .get(`https://localhost:44389/api/BookedCustomer/${setData3()}`)
      .then((res) => {
        setBookedCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <label className="heading">Your Booking Status</label>
      </div>
      <TableContainer component={Paper} className="table212">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow>
              {/* <TableCell className="tableCell">Room</TableCell> */}
              <TableCell className="tableCell">Booking ID</TableCell>
              <TableCell className="tableCell">First Name</TableCell>
              <TableCell className="tableCell">Last Name</TableCell>
              <TableCell className="tableCell">Booking Date</TableCell>
              <TableCell className="tableCell">Number of Days</TableCell>
              <TableCell className="tableCell">Total Charge</TableCell>
              <TableCell className="tableCell">Email Address</TableCell>
              <TableCell className="tableCell">Mobile No</TableCell>
              <TableCell className="tableCell">Status</TableCell>
              {/* <TableCell className="tableCell">Action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {bookedCustomers.map((bookedCustomer, idx) => (
              <TableRow key={bookedCustomer.customerID}>
                {/* <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src={bookedCustomer.roomimageSrc}
                      alt=""
                      className="image"
                    />
                  </div>
                </TableCell> */}
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
                  <span className={`roomStatus ${bookedCustomer.roomStatus}`}>
                    {bookedCustomer.roomStatus}
                  </span>
                </TableCell>
                {/* <TableCell className="tableCell">
                  <div className="cellAction">
                    
                      <div className="approveButton"
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
                      </div>
                    

                    <div className="declineButton"
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
                          roomStatus:"Declined"
                        }
              
                        changeStatus(bookedCustomer.customerID,bookedCusto);
                      }}
                    
                    >
                    Decline</div>

                    <div
                      className="deleteButton"
                      onClick={() =>
                      onDelete(parseInt(bookedCustomer.customerID))
                      }
                    >
                      Delete
                    </div>
                  </div>
                </TableCell> */}
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
