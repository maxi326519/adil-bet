/* import React, { useState } from "react";
import { useSelector } from "react-redux"; */

import MatchCards from "./MatchCards/MatchCards";
// import Nav from "../Nav/Nav";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
/* import Paged from "../Paged/Paged"; */

import styles from "./Home.css";

export default function Home() {
/*   const matches = useSelector((store) => store.Matches);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //Pagina actual (inicia en la 1)
  const [matchesPerPage, setMatchesPerPage] = useState(9); //Cantidad de partidos por pagina
  const indexOfLastMatches = currentPage * matchesPerPage; //'Indice' del ultima partido
  const indexOfFirstMatches = indexOfLastMatches - matchesPerPage; //'Indice' del primer partido
  const currentMatches = matches.slice(indexOfFirstMatches, indexOfLastMatches); //Corta las partidos a mostrar por pagina

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function returnToFirstPage() {
    setCurrentPage(1);
  } */

  return (
    <div className={styles.home}>
      {/* <Nav returnToFirstPage={returnToFirstPage}/> */}
      <div className={styles.Searchbar}>
        <Searchbar /* returnToFirstPage={returnToFirstPage} */ />
        <Filter /* setCurrentPage={setCurrentPage} setOrder={setOrder} */ />
      </div>
      <MatchCards /* currentRecipes={currentMatches} */ />
{/*       <Paged
        recipePerPage={MatchesPerPage}
        recipes={MatchCards.length}
        paged={paged}
        currentPage={currentPage}
      /> */}
      <Footer />
    </div>
  );
}
