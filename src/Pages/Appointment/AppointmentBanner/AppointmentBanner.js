import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className="my-10 bg-banner">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2 mx-auto">
            <img src={chair} className="rounded-lg" alt="dentist chair" />
          </div>
          <div className="shadow-lg px-2 py-3 rounded-lg">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(data) => {
                if (data) {
                  setSelectedDate(data);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
