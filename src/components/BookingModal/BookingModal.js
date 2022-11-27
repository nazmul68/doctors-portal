import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots } = treatment; // treatment = appointmentOptions
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  //   console.log(selectedDate);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);

    // TODO : send data to the server
    // and once data is saved then close the modal
    // and display success toast
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Booking confirmed");
          refetch();
          setTreatment(null);
          // if want set a spinner in this place
        } else {
          toast.error(data.message);
          setTreatment(null);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative ">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking}>
            <input type="text" className="input w-full my-2 " value={date} disabled />

            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full my-2"
              required
            />
            <input
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              name="email"
              className="input input-bordered w-full my-2"
              required
            />
            <select name="slot" className="select select-bordered w-full my-2">
              {slots.map((slot, idx) => (
                <option value={slot} key={idx}>
                  {slot}
                </option> //value set kore dite hobe , otherwise selected option er value porobortiteee pabo na
              ))}
            </select>
            <input type="text" placeholder="Phone" name="phone" className="input input-bordered w-full my-2" required />

            <input type="submit" className="btn btn-accent w-full my-2" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
