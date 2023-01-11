import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatchs, handleSetPage } from "../../redux/actions/GET";

import MatchCards from "./MatchCards/MatchCards";
import Nav from "../Nav/Nav";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatchs());
  });

  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.menu}>
          <Searchbar />
          <Filter />
        </div>
        <MatchCards />
      </div>
      <Footer />
    </div>
  );
}
//////////////////////////////////////////////////////////////
// return (
//   <div className={styles.Promotions}>
//     <Nav />
//     <div className={styles.content}>
//       <div className={styles.menu}>
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}
//         >
//           <img
//             src={item.src}
//             alt={item.altText}
//             width="100%"
//             height="800"
//           />
//           <CarouselCaption
//             captionText={item.caption}
//             captionHeader={item.caption}
//           />
//         </CarouselItem>
//       </div>
//     </div>
//     <Footer />
//   </div>
// );


