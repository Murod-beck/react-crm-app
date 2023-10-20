import EditCategory from "../component/EditCategory";
import CreateCategory from "../component/CreateCategory";
import { useCategory } from "../actions/useCategory";
import { useLoader } from "../hooks/useLoader";
import style from "../style/Pages.module.css";

function Categoris() {
  const { loading } = useCategory();
  const loader = useLoader();

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Categoris</span>
      </div>
      {loading ? (
        loader
      ) : (
        <>
          <CreateCategory />
          <EditCategory />
        </>
      )}
    </div>
  );
}

export default Categoris;
