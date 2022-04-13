import { useState } from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
    // const [main, setMain] = useState("");

  const onClick = (event) => {
      window.location.replace("/react-movie-web")
  }

  return (
    <div className={styles.Nav}>
      <h1 className={styles.Home} onClick={onClick} >HOME</h1>
    </div>
  );
}

export default Nav;
