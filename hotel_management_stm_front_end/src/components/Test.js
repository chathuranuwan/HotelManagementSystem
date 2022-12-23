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




export default function Test() {
  const [Test, setTest] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshTest();
  }, []);

  const SystemManageApi = (url = "https://localhost:44389/api/Room/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshTest() {
    SystemManageApi()
      .fetchAll()
      .then((res) => setTest(res.data))
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("roomID") == "0")
      SystemManageApi()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshTest();
        })
        .catch((err) => console.log(err));
    else
      SystemManageApi()
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
      SystemManageApi()
        .delete(id)
        .then((res) => refreshTest())
        .catch((err) => console.log(err));
  };




  const imageCart = (data) => (

    
    // <div
    //   className="card"
    //   onClick={() => {
    //     showRecordDetails(data);
    //   }}
    // >
    //   <div className="cardImage">
    //     <img src={data.imageSrc} className="cart-img-top" />
    //   </div>

    //   <div className="card-body">
    //     <h5>{data.roomNumber}</h5>
    //     <span>{data.category}</span>

    //     <br />
    //     <button
    //       className="btn btn-light delete-button"
    //       onClick={(e) => onDelete(e, parseInt(data.roomID))}
    //     >
    //       <i className="far fa-trash-alt"></i>
    //     </button>
    //   </div>
    // </div>
    <div className="cardHolder">
      <Card
        sx={{ maxWidth: 345 }}
      >
        <CardMedia
          sx={{ height: 240 }}
          style={{ margin: "10px" }}
          image={data.imageSrc}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );

  return (
    <>
      <AdminNavbar />
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
