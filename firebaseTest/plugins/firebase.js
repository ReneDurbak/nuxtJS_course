import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyA5NZRszpiEosDtuZVPdWbM42I6DTCsTI4",
        authDomain: "testfirebase-fbc99.firebaseapp.com",
        projectId: "testfirebase-fbc99",
        storageBucket: "testfirebase-fbc99.appspot.com",
        messagingSenderId: "576421414925",
        appId: "1:576421414925:web:f66c4a91690e9b3470ed44"
      };

      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);


      return {
        provide: {
            firestore
        }

}
})



