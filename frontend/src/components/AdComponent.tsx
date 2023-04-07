import React from "react";
import { Ad as AdType } from "../types/Ad";

type AdProps = {
    ad: AdType;
};

const AdComponent = (props : AdProps) => {
  return (
    <div className="card mb-4 ">
      <div className="card-body">
        <h5 className="card-title">{props.ad.title}</h5>
        <p className="card-text">{props.ad.description}</p>
        <ul className="d-flex flex-wrap">
          {props.ad.categories &&
            props.ad.categories.map((category) => (
              <li key={category.id} className="badge bg-primary p-2 m-1" 
                style={{width: "fit-content"}}>
                {category.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Posted by {props.ad.user?.username}</small>
        <small className="text-muted">Price: {props.ad.price} €</small>
      </div>
    </div>
  );
};

export default AdComponent;