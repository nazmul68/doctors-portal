import React from "react";

import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        " Fluoride varnish keeps protecting teeth for several months. It works best if it is reapplied every three to six months",
      icon: cavity,
      icon_color: "primary",
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "The filling will replace the part of your tooth the decay destroyed",
      icon: fluoride,
      icon_color: "primary",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "The cost of teeth whitening can vary quite significantly from product to product, procedure to procedure",
      icon: whitening,
      icon_color: "primary",
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="font-bold text-secondary">OUR SERVICES</h3>
        <h2 className="font-semibold text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-5 my-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
