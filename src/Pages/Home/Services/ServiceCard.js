import React from "react";

const ServiceCard = ({ service }) => {
  const { name, description, icon, icon_color } = service;
  return (
    <div className="card mx-auto shadow-lg py-5">
      <figure className="">
        <img src={icon} alt="" className={`rounded-xl ${icon_color}`} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
