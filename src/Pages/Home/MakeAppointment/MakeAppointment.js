import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <section className="w-11/12 mx-auto mt-32 rounded bg-appointment">
      <div className="hero p-2">
        <div className="hero-content flex-col lg:flex-row p-0">
          <div className="md:w-1/2">
            <img
              src={doctor}
              className="md:w-5/6 -mt-32 -mb-2 mx-auto hidden lg:block rounded-lg"
              alt=""
            />
          </div>
          <div className="md:w-1/2 text-white">
            <h3 className="text-primary font-bold text-xl">Appointment</h3>
            <h2 className="py-5 text-4xl font-semibold">
              Make an appointment Today
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Apointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
