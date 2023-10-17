import { useNavigate } from "react-router-dom";
import { useDate } from "../hooks/useDate";
import { Dropdown } from "react-bootstrap";
import { useInfo } from "../actions/useInfo";
import { useAuth } from "../actions/useAuth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

function Header() {
  const { info } = useInfo();
  const { dates } = useDate();
  const navigates = useNavigate("");
  const { logout } = useAuth();

  return (
    <header className={style.headers}>
      <span className={style.logo}>React App</span>
      <span className={style.time}>{dates}</span>
      <Dropdown className={style.dropdowns}>
        <Dropdown.Toggle>{(info && info.username) || "User"}</Dropdown.Toggle>
        <Dropdown.Menu>
          <span
            onClick={() => {
              navigates("/login?message=logout");
              logout();
              toast("Siz xisobdan chiqdingiz!");
            }}>
            Login
          </span>
          <br />
          <span
            onClick={() => {
              navigates("/register?message=logout");
              logout();
              toast("Ro'yxatdan o'ting!");
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
