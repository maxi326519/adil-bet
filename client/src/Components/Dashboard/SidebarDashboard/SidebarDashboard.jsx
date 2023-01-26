import React from 'react';
import { Link } from 'react-router-dom';

//Components
import NavDashboard from './NavDashboard/NavDashboard.jsx'
import ButtonMenu from './ButtonMenu/ButtonMenu.jsx';

import home from '../../../Assets/svg/Dashboard/home.svg';
import users from '../../../Assets/svg/Dashboard/users-solid.svg';
import bets from '../../../Assets/svg/Dashboard/ticket-solid.svg';
import matches from '../../../Assets/svg/Dashboard/baseball-bat-ball-solid.svg';
import deposits from '../../../Assets/svg/Dashboard/money-bill-solid.svg';
import star from '../../../Assets/svg/Dashboard/star.svg';
import withdrawl from '../../../Assets/svg/Dashboard/withdrawl.svg';

import style from './SidebarDashboard.module.css';

export default function SidebarDashboard (){
    return (
        <div className={ style.container }>
            <NavDashboard/>
            <ButtonMenu img={ home } link={ '/dashboard' } value={ 'Home' }/>
            <ButtonMenu img={ users } link={ '/dashboard/users' } value={ 'Usuarios' }/>
            <ButtonMenu img={ bets } link={ '/dashboard/bets' } value={ 'Apuestas' }/>
            <ButtonMenu img={ matches } link={ '/dashboard/matches' } value={ 'Partidos' }/>
            <ButtonMenu img={ deposits } link={ '/dashboard/deposits' } value={ 'Depositos' }/>
            <ButtonMenu img={ star } link={ '/dashboard/reseñas' } value={ 'Reseñas' }/>
            <ButtonMenu img={ withdrawl } link={ '/dashboard/retiros' } value={ 'Retiros' }/>
        </div>
    )
}