import style from "../style/Pages.module.css";

function Profile() {
  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Profile</span>
      </div>
      <div className="col-lg-6">
        <form className={style.forms}>
          <div className="mb-3">
            <label className="form-label">Name</label>
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

export default Profile;
