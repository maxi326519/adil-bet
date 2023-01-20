import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from "../../../redux/actions/GET";
import "./Reviews.css";

export default function Reviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews).slice(0, 10);
  useEffect(() => {
    dispatch(getAllReviews());
  }, []);

  return (
    <div className="reviewContainer">
      {reviews?.map((r) => {
        return r.status === "Aprobed" ? (
          <div className="divReview" key={r.id}>
            <h2>{r.userName}</h2>
            <br />
            <span>{r.score}</span>
            <br />
            <span>{r.reviewData}</span>
          </div>
        ) : null;
      })}
    </div>
  );
}
