import { useNavigate } from "react-router-dom";
import { useCategory } from "../actions/useCategory";
import { useRecord } from "../actions/useRecord";
import { useFilters } from "../hooks/useFilters";
import { useInfo } from "../actions/useInfo";
import { useLoader } from "../hooks/useLoader";
import style from "../style/Pages.module.css";

function History() {
  const navigates = useNavigate("");
  const loader = useLoader();
  const { loading } = useInfo();
  const { categories } = useCategory();
  const { records } = useRecord();
  const { currencys } = useFilters();
  const recors = records.map((rec) => {
    categories.find((c) => c.id === rec.catId);
    return {
      ...rec,
      catName: categories.find((c) => c.id === rec.catId).title,
      typeClass: rec.type === "income" ? "green" : "red",
      typeText: rec.type === "income" ? "income" : "outcome",
    };
  });

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>History</span>
      </div>
      {loading ? (
        loader
      ) : (
        <div className="col">
          <div className={`card ${style.cards}`}>
            <div className="card-body">
              <table className={`${style.tables}`}>
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Sum</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Type</th>
                    <th scope="col">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    recors.map((res, i) => {
                      return (
                        <tr key={res.id}>
                          <th scope="row">{i + 1}</th>
                          <td>{currencys(res.amount)}</td>
                          <td>{res.date.slice(0, 10)}</td>
                          <td>{res.catName}</td>
                          <td style={{ color: res.typeClass }}>
                            {res.typeText}
                          </td>
                          <td>
                            <button
                              className="btn"
                              onClick={() => {
                                navigates(`/detail/${res.id}`);
                              }}>
                              Open
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default History;
