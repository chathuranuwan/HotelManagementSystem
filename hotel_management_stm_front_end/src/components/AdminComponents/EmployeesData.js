import React, {useState, useEffect} from 'react';  
import "./employeesData.css"
import { DataGrid } from '@mui/x-data-grid';
import AddEmployee from './AddEmployee';
import { Source } from '@mui/icons-material';
import axios from "axios";
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function EmployeesData() {

  const [employeeData, setEmployeeData] = useState([])
  const [recordForEdit, setRecordForEdit] = useState(null)

  useEffect(() =>{
    refreshEmployeeData();
  }, [])


  const employeeAPI = (url = 'https://localhost:44389/api/Employee/') =>{
        return{
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
   }

   const refreshEmployeeData =()=>{
      employeeAPI().fetchAll()
      .then(res=>setEmployeeData(res.data))
      .catch(err => console.log(err))
   }

  const addOrEdit = (formData, onSuccess) => {
    if(formData.get('employeeID') == "0")
        employeeAPI().create(formData)
        .then(res =>{
            onSuccess();
            refreshEmployeeData();
        })
        .catch(err => console.log(err))
    else
        employeeAPI().update(formData.get('employeeID'),formData)
        .then(res =>{
            onSuccess();
            refreshEmployeeData();
        })
        .catch(err => console.log(err))
  }


  const viewEmployeeDetails = data =>{
    setRecordForEdit(data)

  }

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      employeeAPI()
        .delete(id)
        .then((res) => refreshEmployeeData())
        .catch((err) => console.log(err));
  }

 
  return (
    <>
      <div className="EmployeesData" >
          <AddEmployee
            addOrEdit = {addOrEdit}
            recordForEdit = {recordForEdit}
          />
      </div>
      <div className="container">
      <div className="py-4">
        <div className="top4" >
                    <h1 style={{ color:'#080500', fontSize:"25px" ,fontWeight:"bold"}}>Employee Details</h1>
        </div>
        <table  class="table border shadow text-center" color='blue'>
          <thead class="thead-primary">
            <tr>
              <th scope="col">Employee ID</th>
              {/* <th scope="col">NIC NO</th> */}
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              {/* <th scope="col">Gender</th> */}
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr>
                <td>{employee.employeeID}</td>
                {/* <td>{employee.employeeNumber}</td> */}
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                {/* <td>{employee.gender}</td> */}
                <td>
                  <Link class="" to='' onClick={()=>{viewEmployeeDetails(employee)}}>
                     <i class="fa fa-edit" aria-hidden="true"></i> 
                  </Link>
                </td>
                <td>
                  <Link class="" to="" onClick={()=>onDelete(parseInt(employee.employeeID))}>
                    <i class="fa fa-trash" aria-hidden="true"></i> 
                  </Link>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )



}