import { useCategory } from "../actions/useCategory";
import { useForm } from "react-hook-form";
import { useState } from "react";
import style from "../style/Pages.module.css";

function EditCategory() {
  const { editCategorys, categories } = useCategory();
  const [editTitle, setEditTitle] = useState("");
  const [editLimit, setEditLimit] = useState(100);
  const [id, setId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const changeCategory = (e) => {
    const catId = e.target.value;
    const { title, limit } = categories.find((c) => c.id === catId);
    setEditTitle(title);
    setEditLimit(limit);
    setId(catId);
  };

  const editCategory = () => {
    editCategorys(editTitle, editLimit, id);
    setEditTitle("");
    setEditLimit(100);
  };

  return (
    <div className="col-md-6">
      <form className={style.forms} onSubmit={handleSubmit(editCategory)}>
        <h3>Edit</h3>
        <div className="mb-3">
          <label className="form-label">Check</label>
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
          <label className="form-label">Category</label>
          <input
            {...register("editTitle", {
              required: true,
            })}
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            type="text"
            className="form-control"
          />
          <div className={style.errors}>
            {errors?.editTitle && (
              <p>{errors?.editTitle?.message || "Write a title!"}</p>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Limit</label>
          <input
            {...register("editLimit", {
              required: true,
            })}
            value={editLimit}
            onChange={(e) => setEditLimit(e.target.value)}
            type="text"
            className="form-control"
          />
          <div className={style.errors}>
            {errors?.editLimit && (
              <p>{errors?.editLimit?.message || "Write a limit!"}</p>
            )}
          </div>
        </div>

        <button type="submit" className="btn">
          Update
          <i className="bi bi-send"></i>
        </button>
      </form>
    </div>
  );
}

export default EditCategory;
