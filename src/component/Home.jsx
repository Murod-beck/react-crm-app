import style from "../style/Homes.module.css";

function Home() {
  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Account</span>
        <button className="btn">Refresh</button>
      </div>
      <div className="col-md-3">
        <div className={`card ${style.cards}`}>
          <div className="card-header border-white">You Account</div>
          <div className="card-body">
            <h5 className="card-title">Currency</h5>
            <h5 className="card-text">0$</h5>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className={`card ${style.cards}`}>
          <div className="card-header border-white">Currency Course</div>
          <div className="card-body">
            <table className={` ${style.tables}`}>
              <thead>
                <tr>
                  <th scope="col">№</th>
                  <th scope="col">Currency</th>
                  <th scope="col">Cours</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
