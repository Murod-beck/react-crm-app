import style from "../style/Header.module.css";

function Sidebar() {
  return (
    <div className="col-md-2 sm-3">
      <div className={style.sidebar}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Sidebar;
