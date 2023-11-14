import { useCategory } from "../actions/useCategory";
import { useRecord } from "../actions/useRecord";
import { useInfo } from "../actions/useInfo";
import { useFilters } from "../hooks/useFilters";
import { useLoader } from "../hooks/useLoader";
import style from "../style/Pages.module.css";

function Planning() {
  const loader = useLoader();
  const { currencys } = useFilters();
  const { info, loading } = useInfo();
  const { categories } = useCategory();
  const { records } = useRecord();

  const infoPlaning = () => {
    const progresing = categories.map((cat) => {
      const spend = records
        .filter((r) => r.catId === cat.id)
        .filter((r) => r.type === "outcome")
        .reduce((total, rec) => {
          return (total += +rec.amount);
        }, 0);
      const percent = (100 * spend) / cat.limit;
      const progressParcent = percent > 100 ? 100 : percent;
      const progressColor =
        percent < 60 ? "green" : percent < 100 ? "yellow" : "red";
      return { ...cat, progressParcent, progressColor, spend };
    });
    return progresing;
  };

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Planning</span>
        <span>{info && currencys(info.bill)}</span>
      </div>
      {loading ? (
        loader
      ) : (
        <>
          <div className="col">
            <div className={`card ${style.cards}`}>
              {info &&
                infoPlaning().map((cat, i) => {
                  return (
                    <div className={`card-body ${style.cardbody}`} key={i}>
                      <div className="card-header">{cat.title}</div>
                      {cat.spend} is {cat.limit}
                      <div className="progress">
                        <div
                          style={{
                            width: cat.progressParcent + "%",
                            background: cat.progressColor,
                          }}
                          className={`progress-bar`}></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Planning;
