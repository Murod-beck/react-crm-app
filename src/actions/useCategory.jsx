import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  update,
} from "firebase/database";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useUid } from "./useUid";

function useCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const uid = useUid();
  const db = getDatabase();

  const createCategorys = async (title, limit) => {
    try {
      const newId = push(ref(db, `users/${uid}/categories/`)).key;
      await set(ref(db, `users/${uid}/categories/ ${newId}`), {
        title,
        limit,
      });
      toast("Created Category");
    } catch (error) {
      toast(error.message);
    }
  };

  const editCategorys = async (title, limit, id) => {
    try {
      await update(ref(db, `users/${uid}/categories/${id}`), {
        title,
        limit,
      });
      toast("Edit Category");
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      onValue(ref(db, `users/${uid}/categories`), (snapshot) => {
        const category = (snapshot.val() && snapshot.val()) || "1";
        setCategories(
          Object.keys(category).map((key) => ({ ...category[key], id: key }))
        );
        setLoading(false);
      });
    } catch (error) {
      toast(error.message);
    }
  }, [db, uid]);

  return { createCategorys, editCategorys, categories, loading };
}

export { useCategory };
