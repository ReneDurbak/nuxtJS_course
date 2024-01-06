import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDPesZEeVjEe135mgKAgXEp1EdTFaXTTDU",
        authDomain: "test3d-8ebb8.firebaseapp.com",
        projectId: "test3d-8ebb8",
        storageBucket: "test3d-8ebb8.appspot.com",
        messagingSenderId: "225417272317",
        appId: "1:225417272317:web:abc617c54bd3ed808fd794"
      };
      

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    return {
        provide: {
            firestore
        }
    }
})