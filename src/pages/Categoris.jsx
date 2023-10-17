import RecordCategory from "../component/RecordCategory";
import CreateCategory from "../component/CreateCategory";
import style from "../style/Pages.module.css";

function Categoris() {
  const createCategory = (title, limit) => {
    console.log(title, limit);
  };

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Categoris</span>
      </div>
      <CreateCategory onSubmit={createCategory} />
      <RecordCategory />
    </div>
  );
}

export default Categoris;
