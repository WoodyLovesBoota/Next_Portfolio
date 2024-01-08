import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "./firebase";

const DBHandler = {
  async readPost(ref: string) {
    const snapshot = await getDocs(collection(firebaseDB, ref));
    return snapshot.docs.map((doc) => {
      return Object.assign(doc.data(), { id: doc.id });
    });
  },
};

export default DBHandler;
