import React, { useState } from "react";
import axios from "axios";
import user from "../../../../api/src/models/user";
//enviar actividad de usuario a user.activity de modelo user
//crear propiedad activity en user


function UserActivity() {
  const [userActivity, setUserActivity] = useState([]);

  const handleClick = async (e) => {
    try {
      const activity = {
        name: e.target.innerText,
        timestamp: Date.now(),
      };

      // Enviar actividad a servidor para guardarla en la base de datos
      await axios.post("/api/user-activity", activity);

      // Agregar actividad a lista de actividades del usuario
      setUserActivity([...userActivity, activity]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <div>
        <h3>User Activity:</h3>
        <ul>
          {userActivity.map((activity, index) => (
            <li key={index}>
              {activity.name} - {activity.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserActivity;
















///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

















// import React, { useState } from 'react';

// function UserActivity() {
//   const [userActivity, setUserActivity] = useState([]);

//   const handleClick = (e) => {
//     setUserActivity([...userActivity, e.target.innerText]);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <div>
//         <h3>User Activity:</h3>
//         <ul>
//           {userActivity.map((activity, index) => (
//             <li key={index}>{activity}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default UserActivity;
