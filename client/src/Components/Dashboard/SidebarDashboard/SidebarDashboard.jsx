import React from 'react';

//Components
import ButtonMenu from './ButtonMenu/ButtonMenu.jsx';

//Assets
import usersIcon from '../../../Assets/svg/Dashboard/users-solid.svg';
import betsIcon from '../../../Assets/svg/Dashboard/ticket-solid.svg';
import matchesIcon from '../../../Assets/svg/Dashboard/baseball-bat-ball-solid.svg';
import depositsIcon from '../../../Assets/svg/Dashboard/money-bill-solid.svg';
import configurationsIcon from '../../../Assets/svg/Dashboard/gear-solid.svg';
import style from './SidebarDashboard.module.css';

export default function SidebarDashboard (){
    return (
        <div className={ style.container }>
            <ButtonMenu img={ usersIcon } link={ '/dashboard/users' } value={ 'Usuarios' }/>
            <ButtonMenu img={ betsIcon } link={ '/dashboard/bets' } value={ 'Apuestas' }/>
            <ButtonMenu img={ matchesIcon } link={ '/dashboard/matches' } value={ 'Partidos' }/>
            <ButtonMenu img={ depositsIcon } link={ '/dashboard/deposits' } value={ 'Depositos' }/>
            <ButtonMenu className={ style.config } img={ configurationsIcon } link={ '/dashboard/config' } value={ 'Configuracion' }/>
        </div>
    )
}