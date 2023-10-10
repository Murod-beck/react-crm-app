import { useNavigate } from "react-router-dom";
import { useDate } from "../hooks/useDate";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { useInfo } from "../hooks/useInfo";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

function Header() {
  const { dates } = useDate();
  const { info } = useInfo();
  const navigates = useNavigate("");
  const { logout } = useAuth();

  return (
    <header className={style.headers}>
      <span className={style.logo}>React App</span>
      <span className={style.time}>{dates}</span>
      <Dropdown className={style.dropdowns}>
        <Dropdown.Toggle>{info.username || "Users"}</Dropdown.Toggle>
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
