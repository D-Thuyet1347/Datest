import React from "react";
import "./ServiceSpa.css";
import services from "../../data/Service";

const ServiceSpa = () => {
  return (
    <div className="container">
      <h2 className="title">Dịch Vụ Spa</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <span className="service-price">{service.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSpa;
