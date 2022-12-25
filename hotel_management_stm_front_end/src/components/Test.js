import React, { useState, useEffect } from "react";
import Room from "./AdminComponents/addRoom/AddRoom";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import "./Test.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { margin } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import jwt from "jwt-decode";

export default function Test() {
  const [Test, setTest] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    refreshTest();
  }, []);

  const SystemManageApi2 = (url = "https://localhost:44389/api/Room/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshTest() {
    SystemManageApi2()
      .fetchAll()
      .then((res) => setTest(res.data))
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("roomID") == "0")
      SystemManageApi2()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshTest();
        })
        .catch((err) => console.log(err));
    else
      SystemManageApi2()
        .update(formData.get("roomID"), formData)
        .then((res) => {
          onSuccess();
          refreshTest();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      SystemManageApi2()
        .delete(id)
        .then((res) => refreshTest())
        .catch((err) => console.log(err));
  };

  const imageCart = (data) => (
    <div className="cardHolder">
      <Card className="cardBig" sx={{ maxWidth: 345 }}>
        <CardMedia
          className="cardBig_image"
          sx={{ height: 240 }}
          style={{ margin: "10px" }}
          image={data.imageSrc}
          title="green iguana"
        />
        <CardContent align="center">
          <Typography gutterBottom variant="h6" component="div">
            Room NO {data.roomNumber}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price Per Day: (Rs) {data.pricePerDay}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            <div className="input-group">
              <div>
                <label className="days">Days<t/></label>
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
          </Typography> */}
          <br />
          <Button
            onClick={() => handleRoute(data)}
            variant="contained"
            size="small"
          >
            Book
          </Button>
        </CardContent>
      </Card>
    </div>
  );

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

  const handleRoute = (data) => {
    let obj = {
      email: setData5(),
      userId: setData3(),
      image: data.imageSrc,
      perDay: data.pricePerDay,
      // days: count,
      // total: pricePerDay * count,
    };
    console.log(obj);
    localStorage.setItem("mydata", JSON.stringify(obj));

    navigate("/booked");
    return;
  };

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
      {/* <div>
        <br />
        <h1>Search Rooms</h1>

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

      </div> */}
      <div className="headTop">
        <br />
        <h1>Book Rooms</h1>
      </div>
      <div>
        <table className="col-md-12">
          <tbody>
            {[...Array(Math.ceil(Test.length / 3))].map((e, i) => (
              <tr key={i}>
                <td>{imageCart(Test[3 * i])}</td>
                <td>{Test[3 * i + 1] ? imageCart(Test[3 * i + 1]) : null}</td>
                <td>{Test[3 * i + 2] ? imageCart(Test[3 * i + 2]) : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
