import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function BetsDepositUser() {

    const userActivities = useSelector(state => state.userActivities)
    const matches = useSelector(state => state.matches)


    if (userActivities?.Bets?.userAllBets?.length > 0 && userActivities?.Deposit?.userAllDeposit?.length > 0 ) {
        return (
            <div>
                <h3>Historial de apuestas</h3>
                {userActivities.Bets.userAllBets.map(e => {
                    return (
                        <div>
                            <p>Estado: {e.status}</p>
                            <p>Cantidad apostada: {e.amount}</p>
                            <p>Apuesta a: {e.betTo === "homeBet" ? <p>Equipo local</p> : <p>Equipo visitante</p>}</p>

                            {/* PARA MOSTRAR EL PARTIDO EN EL QUE APOSTÓ */}

                            {/* <p>Partido: {matches.filter(a => a.id == e.matchId)
                                    return (
                                        <p>{a.homeTeam} vs {a.awayTeam}</p>
                                    )
                                }
                            })} </p> */}
                        </div>
                    )
                })}
                <h3>Historial de recargas</h3>
                 {userActivities.Deposit.userAllDeposit.map(e => {
                     return (
                         <div>
                             <p>Cantidad recargada: {e.amount}</p>
                             <p>Fecha: {e.createdAt.slice(0,10)}</p>
                         </div>
                     )
                 })}
                 <h3>Historial de retiros</h3>
                 {userActivities.Withdraw.userAllWithdraw.map(e => {
                     return (
                         <div>
                             <p>Cantidad de retiro: {e.amount}</p>
                             <p>Fecha: {e.createdAt.slice(0,10)}</p>
                         </div>
                     )
                 })}
            </div>
        )
    } 
    if ( userActivities?.Deposit?.userAllDeposit?.length > 0 && !userActivities.Bets ) {
        return (
            <div>
                <h3>Historial de recargas</h3>
                 {userActivities.Deposit.userAllDeposit.map(e => {
                     return (
                         <div>
                             <p>Cantidad recargada: {e.amount}</p>
                             <p>Fecha: {e.createdAt.slice(0,10)}</p>
                         </div>
                     )
                 })}
            </div>
        )
    }
    if (userActivities?.Bets?.userAllBets?.length > 0 && !userActivities.Deposit) {
        return (
            <div>
                <h3>Historial de apuestas</h3>
                {userActivities.Bets.userAllBets.map(e => {
                    return (
                        <div>
                            <p>Estado: {e.status}</p>
                            <p>Cantidad apostada: {e.amount}</p>
                            <p>Apuesta a: {e.betTo === "homeBet" ? <p>Equipo local</p> : <p>Equipo visitante</p>}</p>
                        </div>
                    )
                })}
            </div>
        )
    } 
    if (userActivities?.Withdraw?.userAllWithdraw?.length > 0 && !userActivities.Bets ) {
        return (
            <div>
                <h3>Historial de retiros</h3>
                 {userActivities.Withdraw.userAllWithdraw.map(e => {
                     return (
                         <div>
                             <p>Cantidad de retiro: {e.amount}</p>
                             <p>Fecha: {e.createdAt.slice(0,10)}</p>
                         </div>
                     )
                 })}
            </div>
        )
    }
    else {
        return (
            <div>
                <p> No hay historial de esta información.</p>
            </div>
        )
    }
}