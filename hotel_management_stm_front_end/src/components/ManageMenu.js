import React, { useState, useEffect } from "react";
import Food from "./AddFoods";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

export default function ManageMenu() {
  const [ManageMenu, setManageMenu] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshManageMenu();
  }, []);

  const SystemManageApi = (url = "https://localhost:44389/api/Food/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshManageMenu() {
    SystemManageApi()
      .fetchAll()
      .then((res) => setManageMenu(res.data))
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("foodID") == "0")
      SystemManageApi()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshManageMenu();
        })
        .catch((err) => console.log(err));
    else
      SystemManageApi()
        .update(formData.get("foodID"), formData)
        .then((res) => {
          onSuccess();
          refreshManageMenu();
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
        .then((res) => refreshManageMenu())
        .catch((err) => console.log(err));
  };

  const imageCart = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <img src={data.imageSrc} className="cart-img-top " />
      <div className="card-body">
        <h5>{data.nameOfFood}</h5>
        <span>{data.foodDescription}</span>

        <br />
        <button
          className="btn btn-light delete-button"
          onClick={(e) => onDelete(e, parseInt(data.foodID))}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-md-12">
          <div class="jumbotron jumbotron-fluid py-4">
            <div class="container text-center">
              <h3 >Add New Food Item</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Food addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
        </div>
        <div className="col-md-8">
          <table>
            <tbody>
              {[...Array(Math.ceil(ManageMenu.length / 3))].map((e, i) => (
                <tr key={i}>
                  <td>{imageCart(ManageMenu[3 * i])}</td>

                  <td>
                    {ManageMenu[3 * i + 1]
                      ? imageCart(ManageMenu[3 * i + 1])
                      : null}
                  </td>

                  <td>
                    {ManageMenu[3 * i + 2]
                      ? imageCart(ManageMenu[3 * i + 2])
                      : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
