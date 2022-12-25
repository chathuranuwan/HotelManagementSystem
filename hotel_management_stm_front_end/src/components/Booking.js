import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookedCustomer from "./BookedCustomer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import jwt from "jwt-decode";

function Booking() {
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/Room/")
      .then((res) => {
        setRooms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredRooms(
      rooms.filter(
        (room) => room.category.toLowerCase().includes(search.toLowerCase())
        // || room.pricePerDay < parseInt(search, 10)
      )
    );
  }, [search, rooms]);

  if (loading) {
    return <p>Loading Rooms...</p>;
  }

  return (
    <>
      <Navbar />
      <br />
      <h1>Search Rooms</h1>
      {/* <div className="col-sm-6 offset-sm-5">
        <label className="form-lable h4">Search</label>
        <input
          className="form-control"
          type="text"
          placeholder="Search rooms"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div className="col-sm-6 offset-sm-5">
        <label align="center" weight="bold">
          Select Room Type
        </label>
        <select
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
        >
          <span></span>
          <option hidden>Room Type</option>
          <option>Single</option>
          <option>Double</option>
          <option>Family</option>
        </select>
      </div>

      {filteredRooms.map((room, idx) => (
        <SystemManageApi key={idx} {...room} />
      ))}
    </>
  );
}

const SystemManageApi = (props) => {
  const { roomNumber, roomID, imageSrc, category, status, pricePerDay } = props;

  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const setData3 = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = jwt(token);
      return tokenData.Id;
    }
  };

  const setData5 = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = jwt(token);
      return tokenData.Email;
    }
  };

  setData3();

  const handleRoute = () => {
    let obj = {
      email: setData5(),
      // roomNo:roomNumber,
      userId: setData3(),
      image: imageSrc,
      perDay: pricePerDay,
      days: count,
      total: pricePerDay * count,
    };
    localStorage.setItem("mydata", JSON.stringify(obj));

    navigate("/booked");
    return;
  };
  return (
    <>
      <div className="vehiclelist-back">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card2">
              <div className="row">
                <div className="col-md-4">
                  <img id="veimage" src={imageSrc} className="cart2-img-top " />
                </div>
                <div className="col-md-6">
                  <div
                    className="card2-body"
                    action="customer.js"
                    method="POST"
                  >
                    <h5>Room No: {roomNumber}</h5>
                    <h6>{category}</h6>
                    <span>Availability: {status} </span>
                    <br />
                    <span id="perday" name="perday">
                      LKR {pricePerDay} /PerDay
                    </span>
                    <br />

                    <div className="input-group">
                      <div>
                        <label className="days">Items</label>
                      </div>
                      <button
                        type="button"
                        className="input-group-text-1"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <div className="input-group-text" id="days" name="days">
                        {count}
                      </div>
                      <button
                        type="button"
                        className="input-group-text-1"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <br />
                    <span id="total" name="total">
                      Total Charge: (LKR) {pricePerDay * count}
                    </span>

                    <br />
                    <br />

                    <button onClick={handleRoute} className="form-input-btn2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");

export default Booking;
