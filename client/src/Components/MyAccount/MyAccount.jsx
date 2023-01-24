import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Nav from "../Nav/Nav";
import SideBar from "./SideBar/SideBar";
import UserActivity from "./userActivity/userActivity";
import UserProfile from "./userProfile/userProfile";

import styles from "./MyAccount.module.css";

export default function MyAccount() {
  const userLogin = useSelector((state) => state.userLogin);
  const [sections, setSection] = useState({
    profile: true,
    activity: false,
  });

  useEffect(()=>{
    if(!userLogin) window.location = "/login";
  });

  function handleSections(section) {
    if (section === "profile") setSection({ profile: true, activity: false });
    if (section === "activity") setSection({ profile: false, activity: true });
    console.log(section);
    console.log(sections);
  }

  return !userLogin ? window.location = "/login" : (
    <div className={styles.myAccount}>
      <Nav />
      <div className={styles.content}>
        <SideBar handleSections={handleSections} />
        {sections.profile ? <UserProfile /> : null}
        {sections.activity ? <UserActivity /> : null}
      </div>
    </div>
  );
}
