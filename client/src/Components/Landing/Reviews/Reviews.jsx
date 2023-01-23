import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from "../../../redux/actions/GET";
import "./Reviews.css";
import logo2 from '../../../Assets/Images/logo2.png'

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
            <h2 className="userName">{r.userName}</h2>
            <div className="cnt-puntuation">
              <span className="puntuation">Puntuacion: {r.score}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png"
                alt="star-logo"
                className="star-logo"
              />
            </div>
            <span className="reviewData">{r.reviewData}</span>
          </div>
        ) : null;
      })}
    </div>
  );
}
