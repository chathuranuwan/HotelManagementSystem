import * as React from 'react';  
import "./roomsData.css"
import { DataGrid } from '@mui/x-data-grid';
import AddRoom from '../addRoom/AddRoom';
import { Source } from '@mui/icons-material';
import axios from "axios";

const roomAPI = (url = 'https://localhost:44389/api/Room/') =>{
  return{
      fetchall: () => axios.get(url),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: id => axios.delete(url + id)
  }
}

const addOrEdit = (formData, onSuccess) => {
  roomAPI().create(formData)
  .then(res =>{
      onSuccess();
  })
  .catch(err => console.log(err))
}

export default function RoomsData() {
  return (
    <div className="roomsData" >
        <AddRoom
          addOrEdit = {addOrEdit}
        />
    </div>
  )



}




