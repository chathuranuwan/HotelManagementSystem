import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, DateInput, Form, FormField } from 'grommet';

export default function BookedCustomer(props) {
  const { addOrEdit, recordForEdit } = props;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/Booking/")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

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
    startingDate : "",
    roomStatus:"Pending",
    //startingDate:null,
    roomimageFile: "",
  };

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  

  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
        });
      };
    } else {
      setValues({
        ...values,
      });
    }
  };

  const validate = () => {
    let temp = {};

    temp.roomimageSrc = values.roomimageSrc == "";
    temp.firstName = values.firstName == "" ? false : true;
    temp.lastName = values.lastName == "" ? false : true;
    temp.emailAddress = values.emailAddress == "" ? false : true;
    temp.mobileNumber = values.mobileNumber == "" ? false : true;
    temp.startingDate = values.startingDate == "" ? false : true;
    temp.numberOfDays = values.numberOfDays == "";
    temp.totalPrice = values.totalPrice == "";

    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();

      formData.append("roomimageName", data.image);

      formData.append("numberOfDays", data.days);
      formData.append("totalPrice", data.total);
      formData.append("customerID", values.customerID);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("startingDate", values.startingDate);
      formData.append("emailAddress", values.emailAddress);
      formData.append("mobileNumber", values.mobileNumber);
      formData.append("roomStatus", values.roomStatus);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " invalid-field" : "";

  if (loading) {
    return <p>Loading checkout...</p>;
  }

  let data = localStorage.getItem("mydata");
  data = JSON.parse(data);
  console.log(data);

  return (
    <>
      <form outoComplete="off" noValidate onSubmit={handleFormSubmit}>

      <div className="col-md-12" align="center">
            <div className="table-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Price Per Day</th>
                    <th>Number of Days</th>
                    <th>Total Charge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td name="roomimageName" value={values.roomimageSrc}>
                      <img src={data.image} className="cart3-img-top " />
                    </td>
                    <td>{data.perDay}</td>

                    <td name="numberOfDays" value={values.numberOfDays}>
                      {data.days}
                    </td>

                    <td name="totalPrice" value={values.totalPrice}>
                      {data.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
          <div className="col-md-12">
            <div className="card11" align='center'>
              <div className="container text-center">
                <p className="lead">Enter your details</p>
              </div>
              <div className="card-body3">
                <div className="form-group" align ="center">
                  <input
                    className={"form-control" + applyErrorClass("firstName")}
                    placeholder="first Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleInputChange}
                    id="image-uploader"
                  />
                </div>
                <div className="form-group" align ="center">
                  <input
                    className={"form-control" + applyErrorClass("lastName")}
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group" align ="center">
                  <input
                    className={"form-control" + applyErrorClass("emailAddress")}
                    placeholder="Email Address"
                    name="emailAddress"
                    type="email"
                    value={values.emailAddress}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group" align ="center">
                  <input
                    className={"form-control"}
                    name="roomStatus"
                    type="string"
                    value={values.roomStatus="Pending"}
                    hidden
                  />
                </div>

                <div className="form-group" align ="center">
                  <input
                    className={"form-control" + applyErrorClass("mobileNumber")}
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group" align ="center">
                  <input
                    className={"form-control" + applyErrorClass("startingDate")}
                    placeholder="Starting Date"
                    name="startingDate"
                    type="date"
                    value={values.startingDate}
                    onChange={handleInputChange}
                  />
                </div>

                
                
                  {/* <Box align="center" pad="large">
                    <Form
                        timeFormat={true}
                        className={"form-control" + applyErrorClass("startingDate")}
                        value={values.startingDate}
                        name="startingDate"
                        onChange={handleInputChange}
                        // onSubmit={({ value: nextValue }) => {
                        // console.log(nextValue);
                        // setValue({ value: '' });
                        // }}
                    >
                      <FormField>
                        <DateInput format="mm/dd/yyyy" />
                      </FormField>
                    </Form>
                  </Box> */}

                

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-light">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      </form>
    </>
  );
}
