import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people1,
    },
    {
      id: 2,
      name: "Jasika Rahman",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Zohanburg",
      img: people2,
    },
    {
      id: 3,
      name: "Anika Pande",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Texus",
      img: people3,
    },
  ];
  return (
    <section className="my-20">
      <div className="mx-5 flex justify-between items-center">
        <div>
          {/*measurement w-4/6 ml-5 */}
          <h4 className="text-primary text-xl font bold">Testimonial</h4>
          <h2 className="text-3xl font-semibold">What Our Patients Says</h2>
        </div>
        <figure className="">
          <img className="w-24 md:w-48 mx-auto" src={quote} alt="" />
          {/*another measurement w-10/12 md:w-2/5 */}
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 ">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
