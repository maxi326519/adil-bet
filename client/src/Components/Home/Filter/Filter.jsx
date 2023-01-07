import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../../redux/actions/GET";
import { getFilters } from "../../../redux/actions/GET";

export default function Filter() {
  const dispatch = useDispatch();
  const allFilters = useSelector((state) => state.filters);
  const [ filters, setFilters ] = useState({league: '', teams: '', country: ''})

  useEffect(() => {
    dispatch(getFilters());
  }, [dispatch]);

  function handleSort(e) {
    dispatch(getMatchs(e));
  }
  function handleSubmit(e){
    e.preventDefault()
    dispatch(getMatchs(filters))
  }
  function filterState(e){
    setFilters({ ...filters, [e.target.name]: [e.target.value]}) 
    console.log(filters)
  }

  return (
    <form onSubmit={handleSubmit} className="filtersDiv">
      <div className="filter">
        <select name="country" onChange={filterState}>
          <option>Filtro por pais</option>
          {console.log(allFilters.country)}
          {allFilters.country?.map((e, i) => {
            return <option value={e} key={i}>{e}</option>;
          })}
        </select>
      </div>
      <div className="filter">
        <select name="league" onChange={filterState}>
          <option>Filtro por liga</option>
          {allFilters.league?.map((e, i) => {
            return <option value={e} key={i}>{e}</option>;
          })}
        </select>
      </div>
      <div className="filter">
        <select name="teams" onChange={filterState}>
          <option>Filtro por equipo</option>
          {allFilters.teams?.map((e, i) => {
            return <option value={e} key={i}>{e}</option>;
          })}
        </select>
      </div>
      <button type="submit">Aplicar</button>
    </form>
  );
}