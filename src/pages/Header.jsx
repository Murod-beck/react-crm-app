import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DateTime } from "../hooks/DateTime";
import style from "../style/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const { dates } = DateTime();
  const navigates = useNavigate("");

  return (
    <header className={style.headers}>
      <span className={style.logo}>React App</span>
      <span className={style.time}>{dates}</span>
      <Dropdown className={style.dropdowns}>
        <Dropdown.Toggle>Users</Dropdown.Toggle>
        <Dropdown.Menu>
          <span
            onClick={() => {
              navigates("/login?message=logout");
            }}>
            Login
          </span>
          <br />
          <span
            onClick={() => {
              navigates("/register?message=logout");
            }}>
            Sign Up
          </span>
        </Dropdown.Menu>
      </Dropdown>
      <Link to="profile">
        <i className="bi bi-person-circle"></i>
      </Link>
    </header>
  );
}

export default Header;
