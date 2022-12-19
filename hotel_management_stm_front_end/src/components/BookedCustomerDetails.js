import React, { useState, useEffect } from "react";
import BookedCustomer from "./BookedCustomer";
import axios from "axios";
import Navbar from "../Navbar";

export default function BookedCustomerDetails() {
  const [bookedCustomerDetails, setBookedCustomerDetails] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshBookedCustomerDetails();
  }, []);

  const SystemManageApi = (url = "https://localhost:44389/api/BookedCustomer/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  function refreshBookedCustomerDetails() {
    SystemManageApi()
      .fetchAll()
      .then((res) => setBookedCustomerDetails(res.data))
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("customerID") == "0")
      SystemManageApi()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshBookedCustomerDetails();
        })
        .catch((err) => console.log(err));
    else
      SystemManageApi()
        .update(formData.get("customerID"), formData)
        .then((res) => {
          onSuccess();
          refreshBookedCustomerDetails();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const imageRoom = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    ></div>
  );

  return (
    <>
      <Navbar />

      <BookedCustomer addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
    </>
  );
}
