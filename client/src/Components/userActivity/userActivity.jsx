import React, { useEffect, useState } from "react";
import styles from "./userActivity.css";

export default function UserActivity() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/activity/:id")
      .then((response) => response.json())
      .then((data) => setData(data))

      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>User Activity:</h3>
      {data ? (
        <ul>
          {data.map((activity, index) => (
            <li key={index}>
              {activity.name} - {activity.amount} - {activity.timestamp}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// <li>
//   {data.name} - {data.amount} - {data.timestamp}
// </li>
