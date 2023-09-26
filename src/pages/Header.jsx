import { Dropdown } from "react-bootstrap";
import { DateTime } from "../hooks/DateTime";
import style from "../style/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const { dates } = DateTime();

  return (
    <header className={style.headers}>
      <span className={style.logo}>React App</span>
      <span className={style.time}>{dates}</span>
      <Dropdown className={style.dropdowns}>
        <Dropdown.Toggle>Users</Dropdown.Toggle>
        <Dropdown.Menu>
          <Link to={"login"}>Login</Link>
          <br />
          <Link to={"register"}>Sign Up</Link>
        </Dropdown.Menu>
      </Dropdown>
      <Link to="profile">
        <i className="bi bi-person-circle"></i>
      </Link>
    </header>
  );
}

export default Header;
