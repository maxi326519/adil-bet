import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewById } from "../../../redux/actions/GET";
import { addReview } from "../../../redux/actions/POST";
import { updateReview } from "../../../redux/actions/PATCH";
import styles from './ReviewForm.module.css'

export default function ReviewForm() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userDates);
  const [formData, setFormData] = useState("");
  const [score, setScore] = useState();
  var validator1 = useSelector((state) => state.reviewById);
  const [validator2, setValidator2] = useState(true);

  useEffect(() => {
    dispatch(getReviewById(userData.id));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (validator2 === true && validator1 === null) {
      dispatch(
        addReview({
          ...formData,
          id: userData.id,
          userName: userData.userName,
        })
      );
      setValidator2(false);
    } else dispatch(updateReview(userData.id, formData));
  }
  function handleScore(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      score: e.target.value,
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      reviewData: e.target.value,
    });
  }
  return (
    <div className={styles.formDiv}>
      <h2 className={styles.titleform}>DEJANOS TU RESEÑA</h2>
      <p className={styles.textform}>Para nosotros como comunidad es muy importante tu opinion, por ende queremos saber tu opinion respecto a este gran trabajo</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.inputReview} type="text" onChange={handleChange} placeholder="Escribe tu reseña..."/>
        <button className={styles.buttonReview}>Enviar</button>
        <select
          className={styles.puntuation}
          value={setScore === "def" ? null : score}
          name="league"
          onChange={(e) => handleScore(e)}
        >
          <option value="def">puntuacion</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </form>
    </div>
  );
}
