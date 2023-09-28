import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Link to="/">Hisob</Link>
      <Link to="/history">History</Link>
      <Link to="/planning">Planning</Link>
      <Link to="/record">Record</Link>
      <Link to="/catigoris">Categoris</Link>
    </div>
  );
}

export default Sidebar;
