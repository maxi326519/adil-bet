import { useState } from 'react';

import UserCard from "./UserCard/UserCard";

import style from "./UserList.module.css";

export default function UserList (){
    
    const [users, setUsers] = useState([
        { name: "John Smith", email: "johnsmith@example.com", wallet: 50, bets: 100},
        { name: "Jane Doe", email: "janedoe@example.com", wallet: 75, bets: 45},
        { name: "Robert Johnson", email: "robertjohnson@example.com", wallet: 100, bets: 25},
        { name: "Sarah Williams", email: "sarahwilliams@example.com", wallet: 85, bets: 55},
        { name: "Michael Brown", email: "michaelbrown@example.com", wallet: 55, bets: 80},
        { name: "Emily Davis", email: "emilydavis@example.com", wallet: 90, bets: 30},
        { name: "Jacob Miller", email: "jacobmiller@example.com", wallet: 40, bets: 60},
        { name: "Nicholas Garcia", email: "nicholasgarcia@example.com", wallet: 75, bets: 45},
        { name: "Amanda Rodriguez", email: "amandarodriguez@example.com", wallet: 100, bets: 25},
        { name: "Daniel Martinez", email: "danielmartinez@example.com", wallet: 85, bets: 55}
    ]);

  return (
    <div className={ style.list }>
        {
            users.map(u =>
                <UserCard
                    name={u.name}
                    email={u.email}
                    wallet={u.wallet}
                    bets={u.bets}
                />
            )
        }
    </div>
  );
};