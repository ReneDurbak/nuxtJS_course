import {doc, setDoc} from "firebase/firestore";

const list = ref([]);

export const useMessenger = () =>{
        
        let { $firestore } = useNuxtApp(); //useNuxtApp produkuje objekt spolu s odkazom na firebase plugin


        
    const send = async(newMessage) =>{
            const docRef = await addDoc(collection($firestore,"messages"), {content: newMessage})//posielam objekt {content: newMessage}
                                //addDoc je async funkcia a produkuje promise cize cela funkcia musi byt async, collection - nieco na sposob listu
                                // pomocou $firestore viem kam to ma poslat(spravu)
            fetch()
        
    }


    const fetch = async ()=>{
        list.lenght = 0;

        const q = query(collection($firestore, "messages"));
        const querySnapchot = await getDocs(q) //hovorime jej co ma ziskat - query(q)
    
        querySnapchot.forEach((doc)=>{
            list.push({
                id: doc.id,
                ...doc.data() //vrati objekt
            })
        }



        )
    }

        return{list, send}

}
