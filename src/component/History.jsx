import style from "../style/Homes.module.css";

function History() {
  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>History</span>
      </div>
      <div className="col">
        <div className={`card ${style.cards}`}>
          <div className="card-body">
            <table className={` ${style.tables}`}>
              <thead>
                <tr>
                  <th scope="col">№</th>
                  <th scope="col">Sum</th>
                  <th scope="col">Time</th>
                  <th scope="col">Category</th>
                  <th scope="col">Type</th>
                  <th scope="col">Open</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn">Open</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
