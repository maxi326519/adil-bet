import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePage } from "../../../../redux/actions/GET";

export default function PaginationControllers() {

    const currentPage = useSelector(state => state.currentPage.number);
    const lastPage = useSelector(state => state.currentPage.totalPages);
    const dispatch = useDispatch();

    function handleNext() {
        console.log('asdasd');
      dispatch(handlePage(1));
    }

    function handlePrev() {
      dispatch(handlePage(-1));
    }

    return (
      <div>
        <div>
          <button onClick={ handlePrev }>{'<'}</button>
          <span>{ currentPage } - </span>
          <span>{ lastPage }</span>
          <button onClick={ handleNext }>{'>'}</button>
        </div>
      </div>
    );
}
