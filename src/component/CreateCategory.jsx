import { useCategory } from "../actions/useCategory";
import { useForm } from "react-hook-form";
import { useState } from "react";
import style from "../style/Pages.module.css";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function CreateCategory({ onSubmit }) {
  const { createCategorys } = useCategory();
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const createCategory = () => {
    createCategorys(title, limit);
    onSubmit({ title, limit });
    setTitle("");
    setLimit("");
    toast("Category created");
  };

  return (
    <div className="col-md-6">
      <form className={style.forms} onSubmit={handleSubmit(createCategory)}>
        <h3>Create</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            {...register("title", {
              required: true,
            })}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
          <div className={style.errors}>
            {errors?.title && (
              <p>{errors?.title?.message || "Write a title!"}</p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Limit</label>
          <input
            {...register("limit", {
              required: true,
              minLength: 1,
            })}
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            type="text"
            className="form-control"
          />
          <div className={style.errors}>
            {errors?.limit && (
              <p>{errors?.limit?.message || "Write a limit!"}</p>
            )}
          </div>
        </div>
        <button type="submit" className="btn">
          Create
          <i className="bi bi-send"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
