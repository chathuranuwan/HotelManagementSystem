import React, { useState, useEffect } from 'react'
import validateInfo from '../../../validateInfo'
import "./addRoom.css"
import axios from "axios";
import RoomsData from '../roomsDatatable/RoomsData';
//import AdminNavbar from '../../AdminNavbar';
//import Navbar from '../../../Navbar';
import AdminNavbar from '../../AdminNavbar';
import { fontGrid } from '@mui/material/styles/cssUtils';
//import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const defaultImage = 'https:/icon-library.com/images/no-image-icon/no-image-icon-0.jpg'

const initialFieldValues = {
    roomID:0,
    roomNumber:'',
    floor:'',
    pricePerDay:'',
    category:'',
    status:'',
    imageName:'',
    imageSrc: defaultImage ,
    imageFile:null
}
//abc

export default function AddRoom(props) {
    
  const { addOrEdit, recordForEdit} = props

  const [values, setValues] = useState(initialFieldValues)
  const [errors, setErrors] = useState({})

  useEffect(()=>{
        if(recordForEdit != null)
            setValues(recordForEdit);
  }, [recordForEdit])

  const handleInputChange = e =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]:value
        })
  }

  const showPreview = e =>{
    if (e.target.files && e.target.files[0]){
        let imageFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = x => {
        
            setValues({
                ...values,
                imageFile,
                imageSrc: x.target.result
            })
        }
        reader.readAsDataURL(imageFile)
        console.log(values);
    }
    else{
        setValues({
            ...values,
            imageFile:null,
            imageSrc: defaultImage
        })
    }
  }

  const validate =()=>{
    let temp={}
    temp.roomNumber = values.roomNumber==""?false:true;
    temp.floor = values.floor==""?false:true;
    temp.pricePerDay = values.pricePerDay==""?false:true;
    temp.category = values.category==""?false:true;
    temp.status = values.status==""?false:true;
    temp.imageSrc = values.imageSrc==defaultImage?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x==true)

  }

  const resetForm = () =>{
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
    setErrors({})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    if(validate()){
        const formData = new FormData()
        formData.append('roomID', values.roomID)
        formData.append('roomNumber', values.roomNumber)
        formData.append('floor', values.floor)
        formData.append('pricePerDay', values.pricePerDay)
        formData.append('category', values.category)
         formData.append('status', values.status)
        formData.append('imageFile', values.imageFile)
        addOrEdit(formData, resetForm)
    }
  }

  const applyErrorClass = field => ((field in errors && errors[field]==false)?' invalid-field':'')

  return (
    <>
    <AdminNavbar/>
        <div className="addRoom">
            <div className="newContainer">
            <div className="top" >
                    <h1 style={{ color:'#080500', fontSize:"25px" ,fontWeight:"bold"}}>Add New Room</h1>
            </div>
                <form  autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                    <div className="bottom">
                        <div className="left">
                            <img 
                                className='image' 
                                src={values.imageSrc}
                            />
                        </div>
                        <div className="right">
                            <div className='container1'>
                                <div className="formInput">
                                    <input 
                                        accept='image/*' 
                                        type="file" 
                                        className={"form-control-file"+ applyErrorClass('imageSrc')}
                                        onChange={showPreview} 
                                        id="image-uploader"
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Room Number</label>
                                    <input 
                                        className={"form-control"+ applyErrorClass('roomNumber')}
                                        type="number" 
                                        name='roomNumber' 
                                        value={values.roomNumber}
                                        onChange={handleInputChange}   
                                    />
                                </div> 
                                <div className="formInput">
                                    <label>Floor</label>
                                    <select
                                        className={"form-control"+ applyErrorClass('floor')}
                                        name='floor' 
                                        value={values.floor}
                                        onChange={handleInputChange}
                                        
                                    > 
                                        <option hidden >-Select-</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>

                                <div className="formInput">
                                    <label>Price Per Day Rs</label>
                                    <select
                                        className={"form-control"+ applyErrorClass('pricePerDay')}
                                        name='pricePerDay' 
                                        value={values.pricePerDay}
                                        onChange={handleInputChange}
                                        
                                    > 
                                        <option hidden >-Select-</option>
                                        <option>2000</option>
                                        <option>5000</option>
                                        <option>8000</option>
                                    </select>
                                </div>

                                <div className="formInput">
                                     <label>Category</label>
                                     <select
                                        className={"form-control"+ applyErrorClass('category')}
                                        name='category' 
                                        value={values.category}
                                        onChange={handleInputChange}
                                        
                                    > 
                                        <option hidden >-Select-</option>
                                        <option>Single Bed</option>
                                        <option>Double Bed</option>
                                        <option>Luxury Suit</option>
                                    </select>
                                    
                                </div>
                                <div className="formInput">
                                    <label>Status</label>
                                    <select 
                                        className={"form-control"+ applyErrorClass('status')}
                                        //type="text" 
                                        name='status' 
                                        value={values.status}
                                        onChange={handleInputChange}
                                    >
                                        <option hidden >-Select-</option>
                                        <option>Available</option>
                                        <option>Booked</option>
                                        
                                    </select>
                                </div>
                                <div className='col-md-12'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    </>

    )
}