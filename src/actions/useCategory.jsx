import { getDatabase, push, ref, set } from "firebase/database";
import { useUid } from "./useUid";
import { toast } from "react-toastify";

function useCategory() {
  const uid = useUid();
  const db = getDatabase();

  const createCategorys = async (title, limit) => {
    try {
      const newId = push(ref(db, `users/${uid}/categories/`)).key;
      await set(ref(db, `users/${uid}/categories/ ${newId}`), {
        title,
        limit,
      });
      return { title, limit, newId };
    } catch (error) {
      toast(error.message);
    }
  };
  console.log(createCategorys);
  return { createCategorys };
}

export { useCategory };
