import React from "react";

const Review = ({ review }) => {
  const { name, review: userReview, location, img } = review;
  return (
    <div className="card w-[370px] md:w-96 mx-auto shadow-lg mt-5">
      <div className="card-body">
        <h2 className="">{userReview}</h2>

        <div className="flex items-center mt-3">
          <figure>
            <img src={img} alt="user" className="w-16 mr-5" />
          </figure>
          <div>
            <h2 className="font-bold text-secondary">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
