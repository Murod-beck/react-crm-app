import style from "../style/Homes.module.css";
import { useInfo } from "../hooks/useInfo";

function Home() {
  const { info, date, currency } = useInfo();

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Account</span>
        <button className="btn">Refresh</button>
      </div>
      <>
        <div className="col-md-3">
          <div className={`card ${style.cards}`}>
            <div className="card-header border-white">You Account</div>
            <div className="card-body">
              <h5 className="card-title"> RUB: {info.bill || "0"}</h5>
              {currency &&
                Object.keys(currency).map((cur, i) => {
                  return (
                    <p key={i}>
                      <span className="card-text">{cur} : </span>
                      <span className="card-text">
                        {info.bill * currency[cur].toFixed(6) || "0"}
                      </span>
                    </p>
                  );
                })}
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
                  {Object.keys(currency).map((curr, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{curr}</td>
                        <td>{currency[curr]}</td>
                        <td>{date.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
