import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePage, handleSetPage } from "../../../../redux/actions/GET";
import styles from './PaginationControllers.module.css';

export default function PaginationControllers() {

    const { number, totalPages } = useSelector(state => state.currentPage);
    const dispatch = useDispatch();
    
    function handlePrev() {
        if(number > 1) dispatch(handlePage(-1))
    }

    function handleNext() {
        if(number < totalPages) dispatch(handlePage(1));
    }
    
    return (
      <div>
        <div>
          <button onClick={ handlePrev } className={styles.buttonback}>{'<'}</button>
          <span className={styles.numberpage}>{ number } - </span>
          <span className={styles.numberpage}>{ totalPages }</span>
          <button onClick={ handleNext } className={styles.buttonback}>{'>'}</button>
        </div>
      </div>
    );
}
