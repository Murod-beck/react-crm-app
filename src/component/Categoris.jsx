import style from "../style/Homes.module.css";

function Categoris() {
  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Categoris</span>
      </div>
      <div className="col-md-6">
        <form className={style.forms}>
          <h3>Create</h3>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Limit</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn">
            Create
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <form className={style.forms}>
          <h3>Record</h3>
          <div className="mb-3">
            <label className="form-label">Check</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Limit</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn">
            Update
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Categoris;
