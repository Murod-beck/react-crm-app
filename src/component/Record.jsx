import style from "../style/Homes.module.css";

function Record() {
  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Record</span>
      </div>
      <div className="col-lg-6">
        <form className={style.forms}>
          <div className={`form-check form-check-inline ${style.formchek}`}>
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label">Income</label>
          </div>
          <div className={`form-check form-check-inline ${style.formchek}`}>
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label">Consumption</label>
          </div>

          <div className="mb-3">
            <label className="form-label">Summ</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn">
            Create
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Record;
