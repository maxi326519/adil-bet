
import styles from './SideBar.module.css';

export default function SideBar({ handleSections }){
 return(
    <div className={ styles.sideBar }>
        <h3>Mi cuenta</h3>
        <button onClick={ () => handleSections('profile') }>Perfil</button>
        <button onClick={ () => handleSections('activity') }>Actividad</button>
    </div>
 )   
}