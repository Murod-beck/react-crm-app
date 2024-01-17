import { useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../actions/useCategory";
import { useRecord } from "../actions/useRecord";

function Detail() {
  const params = useParams();
  const navigates = useNavigate("");
  const { categories } = useCategory();
  const { records } = useRecord();

  console.log(params.id);

  const detail = categories.map((cat) => {
    const details = records.find((rec) => rec.id === params.id);
    const catName = categories.find((cad) => cad.id === details.catId).title;
    console.log(catName);
    return {
      ...cat,
      catNam: catName,
    };
  });

  console.log(detail);

  return (
    <div>
      {detail.map((det) => {
        return (
          <div key={det.id}>
            <span>{det.catNam}</span>
            <span>{det.amount}</span>
            <span>{det.description}</span>
            <span>{det.type}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
