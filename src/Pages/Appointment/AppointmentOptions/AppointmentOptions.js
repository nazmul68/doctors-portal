import React from "react";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <section className="text-center">
      <div className="card shadow-lg w-11/12 mx-auto">
        <div className="card-body">
          <h2 className="text-secondary text-xl font-bold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
          <p>
            {slots.length} {slots.length > 0 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(appointmentOption)} //treatment= appointmentOption
              htmlFor="booking-modal"
              className={`btn btn-primary font-semibold border-none text-white hover:bg-gradient-to-r hover:from-indigo-400 mt-5`}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentOptions;
