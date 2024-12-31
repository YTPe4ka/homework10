import React, { useEffect, useState } from "react";
import "../styles/Reviews.css"

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.product}: {review.rating} stars - {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
