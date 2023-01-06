import React, { useState } from "react";
import { useSelector } from "react-redux";

import MatchCards from "./MatchCards/Card/Card";
// import Nav from "../Nav/Nav";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
import Paged from "../Paged/Paged";

import styles from "./Home.css";

export default function Home() {
  const matchs = useSelector((store) => store.matchs);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //Pagina actual (inicia en la 1)
  const [matchsPerPage, setmatchsPerPage] = useState(9); //Cantidad de partidos por pagina
  const indexOfLastMatchs = currentPage * matchsPerPage; //'Indice' del ultima partido
  const indexOfFirstMatchs = indexOfLastMatchs - matchsPerPage; //'Indice' del primer partido
  const currentMatchs = matchs.slice(indexOfFirstMatchs, indexOfLastMatchs); //Corta las partidos a mostrar por pagina

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function returnToFirstPage() {
    setCurrentPage(1);
  }

  return (
    <div className={styles.home}>
      {/* <Nav returnToFirstPage={returnToFirstPage}/> */}
      <div className={styles.Searchbar}>
        <Searchbar returnToFirstPage={returnToFirstPage} />
        <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </div>
      <MatchCards currentRecipes={currentMatchs} />
      <Paged
        recipePerPage={matchsPerPage}
        recipes={MatchCards.length}
        paged={paged}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}
