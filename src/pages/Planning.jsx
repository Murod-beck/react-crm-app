import style from "../style/Pages.module.css";

function Planning() {
  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Planning</span>
      </div>
      <div className="col">
        <div className={`card ${style.cards}`}>
          <div className="card-body">
            <div className="card-header">Girl</div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planning;
