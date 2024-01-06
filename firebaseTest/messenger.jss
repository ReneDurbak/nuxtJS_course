import { 
	// vlozenie zaznamu
	collection, addDoc,
	// vyber zaznamov 
	getDocs, query 
} from "firebase/firestore";

const list = reactive([])

export const useMessenger = () => {
  let { $firestore } = useNuxtApp()

	const save = async (newMessage) => {

		const docRef = await addDoc(collection($firestore, "messages"), {content: newMessage});
		fetch()
	}

	const fetch = async () => {
		list.length = 0
		const q = query(collection($firestore, "messages"));
		const querySnapshot = await getDocs(q);
		
		querySnapshot.forEach((doc) => {
			list.push({
				id: doc.id,
				...doc.data()
			})
		});
	}

  return {
    list,
    save
  }
}
