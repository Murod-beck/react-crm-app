import { useCategory } from "../actions/useCategory";
import { useRecord } from "../actions/useRecord";
import { useInfo } from "../actions/useInfo";
import { useLoader } from "../hooks/useLoader";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import style from "../style/Pages.module.css";

function Record() {
  const { info, loading, updateInfo } = useInfo();
  const { categories } = useCategory();
  const { createRecord } = useRecord();
  const loader = useLoader();
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(1);
  const [description, setDescription] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const changeCategory = (e) => {
    setId(e.target.value);
  };

  const createRecs = () => {
    if (type === "income") {
      return true;
    }
    return info.bill >= amount;
  };

  const newRecord = () => {
    if (type === "") {
      toast("Select checkbox!");
    } else if (createRecs()) {
      createRecord({
        catId: id || categories[0].id,
        type: type,
        amount: amount,
        description: description,
        date: new Date().toJSON(),
      });
      const bill =
        type === "income" ? +info.bill + +amount : info.bill - amount;
      updateInfo({ bill });
      setAmount(1);
      setDescription("");
    } else {
      toast(`Not enough funds! ${amount - info.bill} `);
    }
  };

  return (
    <div className={`row ${style.rows}`}>
      <div className={`col-12 ${style.cols}`}>
        <span>Record</span>
      </div>
      {loading ? (
        loader
      ) : (
        <>
          <div className="col-lg-6">
            <form className={style.forms} onSubmit={handleSubmit(newRecord)}>
              <div className={`form-check form-check-inline ${style.formchek}`}>
                <input
                  onChange={(e) => setType(e.target.value)}
                  className="form-check-input"
                  name="flex"
                  type="radio"
                  value="income"
                />
                <label className="form-check-label">Income</label>
              </div>
              <div className={`form-check form-check-inline ${style.formchek}`}>
                <input
                  onChange={(e) => setType(e.target.value)}
                  className="form-check-input"
                  name="flex"
                  type="radio"
                  value="outcome"
                />
                <label className="form-check-label">Outcome</label>
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <select className="form-select" onChange={changeCategory}>
                  {categories &&
                    categories.map((cat, i) => {
                      return (
                        <option value={cat.id} key={i}>
                          {cat.title || "There is no category"}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Summ</label>
                <input
                  {...register("editTitle", {
                    required: true,
                  })}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="text"
                  className="form-control"
                />
                <div className={style.errors}>
                  {errors?.amount && (
                    <p>{errors?.amount?.message || "Write a amount!"}</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  {...register("description", {
                    required: true,
                  })}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                />
                <div className={style.errors}>
                  {errors?.description && (
                    <p>
                      {errors?.description?.message || "Write a description!"}
                    </p>
                  )}
                </div>
              </div>
              <button type="submit" className="btn">
                Create
                <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Record;
