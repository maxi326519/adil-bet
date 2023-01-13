import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../../redux/actions/GET";
import { getFilters } from "../../../redux/actions/GET";
import { orderByName } from "../../../redux/actions/GET";
import { handleSetPage } from "../../../redux/actions/GET";
import "./Filter.css";

export default function Filter() {
  const dispatch = useDispatch();
  const allFilters = useSelector((state) => state.filters);
  const [filters, setFilters] = useState({
    league: "",
    teams: "",
    country: "",
  });
  const [selected, setSelected] = useState({
    Alphabetically: "alpha",
    league: "All",
    teams: "All",
    country: "All",
  });

  useEffect(() => {
    dispatch(getFilters());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getMatchs());
    setSelected({
      Alphabetically: "alpha",
      league: "All",
      teams: "All",
      country: "All",
    });
  }

  function handleName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    dispatch(handleSetPage());
    setSelected({ Alphabetically: { e } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMatchs(filters));
    dispatch(orderByName(e.target.value));
  }

  function filterState(e) {
    setFilters({ ...filters, [e.target.name]: [e.target.value] });
    setSelected({ league: { e }, teams: { e }, country: { e } });
  }

  return (
    <form onSubmit={handleSubmit} className="filtersDiv">
      <h3>Filtros</h3>
      <div className="filter">
        <select
          className="select"
          value={selected.country === "All" ? "country" : null}
          name="country"
          onChange={(e) => filterState(e)}
        >
          <option value="All" key="All">
            Filtro por pais
          </option>
          {allFilters.country?.map((e, i) => {
            return (
              <option value={e} key={i}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter">
        <select
          className="select"
          value={selected.league === "All" ? "league" : null}
          name="league"
          onChange={(e) => filterState(e)}
        >
          <option value="All" key="All">
            Filtro por liga
          </option>
          {allFilters.league?.map((e, i) => {
            return (
              <option value={e} key={i}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter">
        <select
          className="select"
          value={selected.teams === "All" ? "teams" : null}
          name="teams"
          onChange={(e) => filterState(e)}
        >
          <option value="All" key="All">
            Filtro por equipo
          </option>
          {allFilters.teams?.map((e, i) => {
            return (
              <option value={e} key={i}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter">
        <select
          className="select"
          value={selected.Alphabetically === "alpha" ? "Alphabetically" : null}
          name="Alphabetically"
          onChange={(e) => handleName(e)}
        >
          <option value="alpha" key="alpha">
            Alfabéticamente
          </option>
          <option value="A to Z">A to Z</option>
          <option value="Z to A">Z to A</option>
        </select>
        <button type="submit">Aplicar</button>
        <button className="btnreload" onClick={handleClick}>
          Restaurar filtros
        </button>
      </div>
    </form>
  );
}
