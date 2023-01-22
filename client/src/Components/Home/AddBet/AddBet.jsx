import { useState} from 'react';

import styles from "./AddBet.module.css";

export default function AddBet({ window, handleWindow }) {

    const [selectedOption, setOption] = useState(null);
    const [amount, setAmount] = useState(null);
    const [error, setError] = useState({ value: false, msg: ''});

    function handleSubmit(e){
        e.preventDefault();

        if(selectedOption){
            if(amount){
                handleWindow();
                handleClose();
            }else  setError({ value: true, msg: 'No se selecciono un monto'});
        }else setError({ value: true, msg: 'No se selecciono un tipo de apuesta'});
    }

    function handleClose(){
        setOption(null)
        setAmount(null);
        setError({ value: false, msg: ''});
        handleWindow();
    }

  return (
    <div class={`${styles.container} ${window ? styles.isActive : null}`}>
      <form className={`${styles.window} ${ error.value ? styles.error : null}`} onSubmit={ handleSubmit }>
        <div className={styles.closeContainer}>
            <button type="button" class="btn-close" aria-label="Close" onClick={ handleClose }></button>
        </div>
        <div className="mb-3">
          <label className="form-label">Elige un monto</label>
          <input className="form-control" type="number" name="amount" onChange={ (e) => setAmount(e.target.value) } />
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="typeBet" id="homeBet" onChange={ (e) => setOption('homeBet') }/>
          <label class="form-check-label" for="flexRadioDefault1">
            Apuesta al equipo local
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="typeBet" id="awayBet" onChange={ (e) => setOption('awayBet') }/>
          <label class="form-check-label" for="flexRadioDefault2">
            Apuesta al equipo visitante
          </label>
        </div>
        { error.value ? <span className={styles.spanError}>{error.msg}</span> : null}
        <button className="btn btn-success" type="submit" >Agregar apuesta</button>
      </form>
    </div>
  );
}