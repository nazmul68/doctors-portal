import React from "react";

const InfoCard = ({ cardData }) => {
  const { name, icon, description, bg, gradiant } = cardData;
  return (
    <div
      className={`card md:card-side  shadow-xl ${bg} text-white px-6 py-5 ${gradiant} `}
    >
      <figure className="cursor-pointer">
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
