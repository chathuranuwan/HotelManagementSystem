import React, { useState, useEffect } from "react";
import "../App.css";

const defaultImageSrc = "./images/istockphoto.jpg";

const initialFieldValues = {
  foodID: 0,
  foodCategory: "",
  numberOfdays: "",
  nameOfFood: "",
  availability: "",
  vehicleType: "",
  pricePerItem: "",
  foodDescription: "",
  imageName: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
};

export default function AddFoods(props) {
  const { addOrEdit, recordForEdit } = props;

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
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };
  const validate = () => {
    let temp = {};
    temp.foodCategory = values.foodCategory == "" ? false : true;
    temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
    temp.nameOfFood = values.nameOfFood == "" ? false : true;
    temp.foodDescription = values.foodDescription == "" ? false : true;
    temp.availability = values.availability == "" ? false : true;
    temp.pricePerItem = values.pricePerItem == "" ? false : true;

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
      formData.append("foodID", values.foodID);
      formData.append("foodCategory", values.foodCategory);
      formData.append("nameOfFood", values.nameOfFood);
      formData.append("imageName", values.imageName);
      formData.append("imageFile", values.imageFile);
      formData.append("availability", values.availability);
      formData.append("pricePerItem", values.pricePerItem);
      formData.append("foodDescription", values.foodDescription);

      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " invalid-field" : "";

  return (
    <>
      <div className="container text-center">
        <p className="lead">Add A Food</p>
      </div>
      <form outoComplete="off" noValidate onSubmit={handleFormSubmit}>
        <div className="card">
          <img src={values.imageSrc} className="cart-img-top" />
          <div className="card-body">
            <div className="form-group">
              <input
                type="file"
                accept="image/*"
                className={"form-control-file" + applyErrorClass("imageSrc")}
                onChange={showPreview}
                id="image-uploader"
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("foodCategory")}
                placeholder="Food Category"
                name="foodCategory"
                value={values.foodCategory}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("nameOfFood")}
                placeholder="Name of Food"
                name="nameOfFood"
                value={values.nameOfFood}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("availability")}
                placeholder="Availability"
                name="availability"
                value={values.availability}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("pricePerItem")}
                placeholder="Price"
                name="pricePerItem"
                value={values.pricePerItem}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("foodDescription")}
                placeholder="Description"
                name="foodDescription"
                value={values.foodDescription}
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
      </form>
    </>
  );
}
