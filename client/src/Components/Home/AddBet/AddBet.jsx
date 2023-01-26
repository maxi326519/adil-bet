import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBet } from '../../../redux/actions/POST';

import styles from "./AddBet.module.css";

export default function AddBet({ window, handleWindow, match }) {

    const [selectedOption, setOption] = useState(null);
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState({ value: false, msg: ''});
    const [checked, setCheck] = useState({ homeBet: false, awayBet: false});
    const userDates = useSelector( state => state.userDates );
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();

        console.log(match);

        if(selectedOption){
            if(amount){
                dispatch(addBet({
                  homeBet: checked.homeBet ? amount : "",
                  awayBet: checked.awayBet ? amount : "",
                  tieBet: "",
                  idUser: userDates.id,
                  idMatch: match,
                }));
                handleClose();
            }else  setError({ value: true, msg: 'No se selecciono un monto'});
        }else setError({ value: true, msg: 'No se selecciono un tipo de apuesta'});
    }
    
    function handleCheck(e){
      if(e.target.id === 'homeBet') setCheck({ homeBet: true, awayBet: false});
      if(e.target.id === 'awayBet') setCheck({ homeBet: false, awayBet: true});
      setOption(e.target.id)
    }

    function handleClose(){
        handleWindow();
        setOption(null)
        setAmount(0);
        setCheck({ homeBet: false, awayBet: false});
        setError({ value: false, msg: ''});
    }

  return (
    <div className={`${styles.container} ${window ? styles.isActive : null}`}>
      <form className={`${styles.window} ${ error.value ? styles.error : null}`} onSubmit={ handleSubmit }>
        <div className={styles.closeContainer}>
            <button type="button" className="btn-close" aria-label="Close" onClick={ handleClose }></button>
        </div>
        <div className="mb-3">
          <label className="form-label">Elije un monto</label>
          <input className="form-control" type="number" name="amount" value={amount} onChange={ (e) => setAmount(e.target.value) } />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="typeBet" id="homeBet" checked={checked.homeBet} onChange={handleCheck}/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Apuesta al equipo local
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="typeBet" id="awayBet" checked={checked.awayBet} onChange={handleCheck}/>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Apuesta al equipo visitante
          </label>
        </div>
        { error.value ? <span className={styles.spanError}>{error.msg}</span> : null}
        <button className="btn btn-success" type="submit" >Agregar apuesta</button>
      </form>
    </div>
  );
}