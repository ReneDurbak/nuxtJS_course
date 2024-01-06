import { 
	// vlozenie zaznamu
	collection, addDoc,
	// vyber zaznamov 
	getDocs, query 
} from "firebase/firestore";


const tasks = reactive([])


/*const addTask = (newTask) => {
    tasks.push(newTask)
}*/

export const useTasks = () => {

    let { $firestore } = useNuxtApp() //$firestore - identifikator databazy

	const addTask = async (newTask) => {
        //promise - asynchornne spravoanie poziadaviek, ked mame funkciu ktora vola async funkciu tak aj ta dana funkcia je async
		const docRef = await addDoc(collection($firestore, "tasks"), newTask); // ($firestore, "tasks") - do kolonky tasks v tabulke ulozi newTask, addDoc - vracia promise a gettuje cize ziskava
		fetch()
	}

	const fetch = async () => {
		tasks.length = 0 //premazanie listu - aby nanovo sme pushovali a aby sme nepushovali novy task spolu s duplikatom
		const q = query(collection($firestore, "tasks")); //queries - dopyty nad databazou, query zostavi dopyt/poziadavku nad databazou 
        const querySnapshot = await getDocs(q); //getDocs - asynchronna funkcia lebo funkcia fetch je async a vracia pole spolu s await inac normalne vracia promise
        
        querySnapshot.forEach((doc) => {
			tasks.push({
				id: doc.id, //databaza generuje id za nas takze to mozeme rovno vlozit do pola tasks
				...doc.data() //data je specialna metoda
			})
		});
	}
    
    return{tasks, addTask}
}