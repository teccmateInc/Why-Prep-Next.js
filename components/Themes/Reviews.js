import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="container py-5 ">
          <div className="review-container">
        <h3 className="review-heading">Reviews</h3>
        <h3 className="reviews-sub">What People are Saying</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9 ">
            <div
              className="reviewCards"
            >
              <img
                className="review-img"
                src="/images/reviewCard.PNG"
              />
              <img
                className="review-img"
                src="/images/reviewCard.PNG"
              />
              <img
              className="review-img"
                src="/images/reviewCard.PNG"
              />
              <img
              className="review-img"
                src="/images/reviewCard.PNG"
              />
              <img
              className="review-img"
                src="/images/reviewCard.PNG"
              />
              <img
              className="review-img"
                src="/images/reviewCard.PNG"
              />
            </div>
          </div>
          <div className="col-10 col-md-3">
              <div className="reviews-right">
              <p className="ratingUsers">Ratings from 24 users</p>
              <h3 className="reviews-Percentage">80% positive</h3>
              <img src="/images/stars1.PNG" width="100%" style={{padding:"2vmax 0"}}/>
              <button className="reviewBtn">WRITE A REVIEW</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
