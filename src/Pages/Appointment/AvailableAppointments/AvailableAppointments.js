import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import BookingModal from "../../../components/BookingModal/BookingModal";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import Spinner from "../../Shared/Spinner/Spinner";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then((res) => res.json()),
  });

  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data))
  //     .catch((err) => console.error(err));
  // }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <section className="my-16">
      <p className="text-center font-bold text-primary my-10">Available Appointments on {format(selectedDate, "PP")}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && selectedDate && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
      {/* chaile state a innitial value empty array o dite pari  */}
    </section>
  );
};

export default AvailableAppointments;
