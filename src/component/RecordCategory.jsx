import style from "../style/Pages.module.css";

function RecordCategory() {
  return (
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
  );
}

export default RecordCategory;
