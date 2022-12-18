import React, { Component, useState, useEffect } from "react";

import axios from "axios";
import "../../App.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Customer from "../Customer";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/Food/")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredFoods(
      foods.filter(
        (food) =>
          food.foodCategory.toLowerCase().includes(search.toLowerCase()) ||
          food.nameOfFood.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, foods]);

  if (loading) {
    return <p>Loading Menu...</p>;
  }

  return (
    <>
      {" "}
      <Navbar />
      <h1>Food List</h1>
      <div className="col-sm-6 offset-sm-5">
        <label className="form-lable h4">Search</label>
        <input
          className="form-control"
          type="text"
          placeholder="Search foods"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredFoods.map((food, idx) => (
        <SystemManageApi key={idx} {...food} />
      ))}
    </>
  );
}

const SystemManageApi = (props) => {
  const {
    foodCategory,
    foodID,
    imageSrc,
    nameOfFood,
    availability,
    foodDescription,
    pricePerItem,
  } = props;

  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleRoute = () => {
    let obj = {
      image: imageSrc,
      PerItem: pricePerItem,
      items: count,
      total: pricePerItem * count,
    };
    localStorage.setItem("mydata", JSON.stringify(obj));

    navigate("/CustomerDetails");
    return;
  };
  return (
    <>
      <div className="cart-back">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card2">
              <div className="row">
                <div className="col-md-4">
                  <img id="veimage" src={imageSrc} className="cart2-img-top " />
                </div>
                <div className="col-md-8">
                  <div
                    className="card2-body"
                    action="customer.js"
                    method="POST"
                  >
                    <h5>{nameOfFood}</h5>
                    <span>{availability} Available</span>
                    <br />
                    <span>{foodDescription}</span>
                    <br />
                    <span id="perday" name="perday">
                      LKR {pricePerItem}
                    </span>
                    <br />

                    <div className="input-group">
                      <div>
                        <label className="days">Quntity</label>
                      </div>
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <div className="input-group-text" id="days" name="days">
                        {count}
                      </div>
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>

                    <span id="total" name="total">
                      Total Charge LKR {pricePerItem * count}
                    </span>

                    <br />
                    <br />

                    <button onClick={handleRoute} className="form-input-btn2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");

export default App;
