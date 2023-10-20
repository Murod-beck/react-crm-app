import style from "../style/Loading.module.css";

function useLoader() {
  return (
    <div className="text-center">
      <div className={style.container}>
        <div className={style.ring}></div>
        <div className={style.ring}></div>
        <div className={style.ring}></div>
        <span className={style.loading}>Lodaing...</span>
      </div>
    </div>
  );
}

export { useLoader };
