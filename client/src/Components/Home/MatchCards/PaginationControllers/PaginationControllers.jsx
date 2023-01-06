import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePage, handleSetPage } from "../../../../redux/actions/GET";

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
          <button onClick={ handlePrev }>{'<'}</button>
          <span>{ number } - </span>
          <span>{ totalPages }</span>
          <button onClick={ handleNext }>{'>'}</button>
        </div>
      </div>
    );
}
