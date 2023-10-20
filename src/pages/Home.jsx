import { useCurrency } from "../actions/useCurrency";
import { useInfo } from "../actions/useInfo";
import { useLoader } from "../hooks/useLoader";
import style from "../style/Pages.module.css";

function Home() {
  const loader = useLoader(false);
  const { info, loading } = useInfo();
  const { curDate, currency } = useCurrency();

  const onRefresh = (e) => {
    e.preventDefault();
    window.location.reload(true);
  };

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Account</span>
        <button className="btn" onClick={onRefresh}>
          Refresh
        </button>
      </div>
      {loading ? (
        loader
      ) : (
        <>
          <div className="col-md-3">
            <div className={`card ${style.cards}`}>
              <div className="card-header border-white">You Account</div>
              <div className="card-body">
                <h5 className="card-title">
                  RUB: {(info && info.bill) || "0"}
                </h5>
                {currency &&
                  Object.keys(currency).map((cur, i) => {
                    return (
                      <p key={i}>
                        <span className="card-text">{cur} : </span>
                        <span className="card-text">
                          {(info && info.bill * currency[cur].toFixed(5)) ||
                            "0"}
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
                    {currency &&
                      Object.keys(currency).map((curr, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{curr}</td>
                            <td>{currency[curr].toFixed(4)}</td>
                            <td>{curDate}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
