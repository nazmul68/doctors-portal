import React from "react";
import clock from "../../../assets/icons/clock.svg";
import mark from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00 am everyday, friday closed",
      icon: clock,
      bg: "bg-primary",
      gradiant: "bg-gradient-to-r from-indigo-400",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "43/A beside Shah ALi Thana , Mirpur 1 , Dhaka 1216 ",
      icon: mark,
      bg: " bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+00801776097768",
      icon: phone,
      bg: "bg-secondary",
      gradiant: "bg-gradient-to-r from-primary",
    },
  ];
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-5 m-5 my-20">
      {cardsData.map((cardData) => (
        <InfoCard key={cardData.id} cardData={cardData}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
