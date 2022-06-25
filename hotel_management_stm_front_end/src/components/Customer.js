import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import axios from "axios";

export default function Customer(props) {
  const { addOrEdit, recordForEdit } = props;

  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/Cart/")
      .then((res) => {
        setCarts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const initialFieldValues = {
    customerID: 0,
    foodimageSrc: "",
    foodimageName: "",
    numberOfItems: "",
    totalPrice: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    nicNo: "",
    billingAddress: "",
    customerCity: "",
    postalCode: "",
    foodimageFile: "",
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

    temp.foodimageSrc = values.foodimageSrc == "";
    temp.firstName = values.firstName == "" ? false : true;
    temp.lastName = values.lastName == "" ? false : true;
    temp.emailAddress = values.emailAddress == "" ? false : true;
    temp.mobileNumber = values.mobileNumber == "" ? false : true;
    temp.nicNo = values.nicNo == "" ? false : true;
    temp.billingAddress = values.billingAddress == "" ? false : true;
    temp.customerCity = values.customerCity == "" ? false : true;
    temp.postalCode = values.postalCode == "" ? false : true;
    temp.numberOfItems = values.numberOfItems == "";
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

      formData.append("foodimageName", data.image);

      formData.append("numberOfItems", data.items);
      formData.append("totalPrice", data.total);
      formData.append("customerID", values.customerID);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("emailAddress", values.emailAddress);
      formData.append("mobileNumber", values.mobileNumber);
      formData.append("nicNo", values.nicNo);
      formData.append("billingAddress", values.billingAddress);
      formData.append("customerCity", values.customerCity);
      formData.append("postalCode", values.postalCode);
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
        <div className="row">
          <div className="col-md-7">
            <div className="card3">
              <div className="container text-center">
                <p className="lead">Enter your details</p>
              </div>
              <div className="card-body3">
                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("firstName")}
                    placeholder="first Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleInputChange}
                    id="image-uploader"
                  />
                </div>
                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("lastName")}
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("emailAddress")}
                    placeholder="Email Address"
                    name="emailAddress"
                    value={values.emailAddress}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("mobileNumber")}
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    className={
                      "form-control" + applyErrorClass("billingAddress")
                    }
                    placeholder="Billing Address"
                    name="billingAddress"
                    value={values.billingAddress}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("customerCity")}
                    placeholder="Customer City"
                    name="customerCity"
                    value={values.customerCity}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("nicNo")}
                    placeholder="nic No"
                    name="nicNo"
                    value={values.nicNo}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group ">
                  <input
                    className={"form-control" + applyErrorClass("postalCode")}
                    placeholder="postalCode"
                    name="postalCode"
                    value={values.postalCode}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-light">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="table-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Food Item</th>
                    <th>Price Per Item</th>
                    <th>Number of Items</th>
                    <th>Total Charge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td name="foodimageName" value={values.foodimageSrc}>
                      <img src={data.image} className="cart3-img-top " />
                    </td>
                    <td>{data.PerItem}</td>

                    <td name="numberOfItems" value={values.numberOfItems}>
                      {data.items}
                    </td>

                    <td name="totalPrice" value={values.totalPrice}>
                      {data.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
