import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTeam } from "../../../redux/actions/GET";

import styles from "./Searchbar.module.css";

export default function Searchbar({ returnToFirstPage }) {
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setTeam(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTeam("");
    dispatch(searchTeam(team));
    returnToFirstPage();
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        value={team}
        placeholder="Busca tu equipo favorito..."
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyDown}
        className={styles.input + 'input'}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={styles.btn}
      >
        Buscar
      </button>
    </div>
  );
}
