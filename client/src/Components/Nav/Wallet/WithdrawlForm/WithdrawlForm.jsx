import { useState} from 'react';

import styles from "./WithdrawlForm.module.css";

export default function WithdrawlForm({ window, handleWindow }) {

  const [error, setError] = useState({ value: false, msg: ''});

  function handleSubmit(e){
    e.preventDefault();

/*     if(condicion){
        handleClose();
    }else  setError({ value: true, msg: 'Mensaje de error'}); */
  }

  function handleClose(){
    handleWindow();
  }

  return (
    <div class={`${styles.container} ${window ? styles.isActive : null}`}>
      <form className={`${styles.window} ${ error.value ? styles.error : null}`} onSubmit={ handleSubmit }>
        <div className={styles.closeContainer}>
            <button type="button" class="btn-close" aria-label="Close" onClick={ handleClose }></button>
        </div>
        
        { error.value ? <span className={styles.spanError}>{error.msg}</span> : null}
        <button className="btn btn-success" type="submit" >Agregar apuesta</button>
      </form>
    </div>
  );
}