import React, {useState, useEffect} from 'react';  
import "./roomsData.css"
import { DataGrid } from '@mui/x-data-grid';
import AddRoom from '../addRoom/AddRoom';
import { Source } from '@mui/icons-material';
import axios from "axios";
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function RoomsData() {

  const [roomData, setRoomData] = useState([])
  const [recordForEdit, setRecordForEdit] = useState(null)

  useEffect(() =>{
    refreshRoomData();
  }, [])


  const roomAPI = (url = 'https://localhost:44389/api/Room/') =>{
    return{
        fetchAll: () => axios.get(url),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
      }
   }

   const refreshRoomData =()=>{
      roomAPI().fetchAll()
      .then(res=>setRoomData(res.data))
      .catch(err => console.log(err))
   }

  const addOrEdit = (formData, onSuccess) => {
    if(formData.get('roomID') == "0")
        roomAPI().create(formData)
        .then(res =>{
            onSuccess();
            refreshRoomData();
        })
        .catch(err => console.log(err))
    else
        roomAPI().update(formData.get('roomID'),formData)
        .then(res =>{
            onSuccess();
            refreshRoomData();
        })
        .catch(err => console.log(err))
  }


  const viewRoomDetails = data =>{
    setRecordForEdit(data)

  }

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      roomAPI()
        .delete(id)
        .then((res) => refreshRoomData())
        .catch((err) => console.log(err));
  }

  const navigate = useNavigate();

  const navigateToAddRoom = () => {
  
    navigate('/AddRoom');
    
  }
  return (
    <>
      <div className="roomsData" >
          <AddRoom
            addOrEdit = {addOrEdit}
            recordForEdit = {recordForEdit}
          />
      </div>
      <div className="container">
      <div className="py-4">
        <div>
           <button type="button" class="btn btn-primary" onClick={navigateToAddRoom}>Add Room</button>
        </div>
        <h3 class="mb-3 text-center">Room Details</h3>
        <table  class="table border shadow text-center" color='blue'>
          <thead class="thead-primary">
            <tr>
              <th scope="col">Room No</th>
              <th scope="col">Floor</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {roomData.map((room) => (
              <tr>
                <td>{room.roomNumber}</td>
                <td>{room.floor}</td>
                <td>{room.category}</td>
                <td>{room.status}</td>
                <td>
                  <Link class="" to='' onClick={()=>{viewRoomDetails(room)}}>
                     <i class="fa fa-edit" aria-hidden="true"></i> 
                  </Link>
                </td>
                <td>
                  <Link class="" to="" onClick={()=>onDelete(parseInt(room.roomID))}>
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
