import React, { useState } from "react";
import { Ad } from "../types/Ad";
import { useNavigate } from "react-router-dom";

const initialAdState: Ad = {
  title: "",
  userId: 0,
  description: "",
  price: 0,
  categories: [],
};

const baseApi = "http://localhost:3000/api";

const AdForm = () => {
  const [ad, setAd] = useState(initialAdState);

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setAd({ ...ad, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = localStorage.getItem("user")

    if (!user) {
      return;
    }
    const { id } = JSON.parse(user);
    ad.userId = id;
    
    fetch(`${baseApi}/ad`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    })
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="m-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows={3}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={ad.price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create Ad
      </button>
    </form>
  );
};

export default AdForm;
