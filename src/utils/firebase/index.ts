import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
