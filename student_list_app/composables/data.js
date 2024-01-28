const studentsInitialValue=[
    {
      name: "Samuel",
      surname: "Novotný",
      class: "3.B",
      age: 18  
    },
    {
      name: "Jozef",
      surname: "Cerný",
      class: "3.B",
      age: 17  
    },
    {
      name: "Anton",
      surname: "Móric",
      class: "2.A",
      age: 17  
    },
    {
      name: "Juraj",
      surname: "Šípoš",
      class: "2.A",
      age: 16  
    },
    {
      name: "Andrej",
      surname: "Šípoš",
      class: "1.A",
      age: 15  
    },
    {
      name: "Andrej",
      surname: "Ulica",
      class: "1.A",
      age: 16  
    },
    {
      name: "Pavol",
      surname: "Karpjak",
      class: "2.B",
      age: 17  
    },
    {
      name: "Michal",
      surname: "odór",
      class: "2.B",
      age: 16  
    },
    {
      name: "Svorad",
      surname: "Domonkoš",
      class: "1.B",
      age: 15  
    },
    {
      name: "Benedikt",
      surname: "Ondreja",
      class: "1.B",
      age: 16  
    },
    {
      name: "Gabriel",
      surname: "Onufer",
      class: "3.A",
      age: 17  
    },
    {
      name: "Peter",
      surname: "Onderčák",
      class: "3.A",
      age: 18  
    },
    {
      name: "Felix",
      surname: "Solony",
      class: "4.B",
      age: 18  
    },
    {
      name: "Alexander",
      surname: "Rette",
      class: "4.B",
      age: 18  
    },
    {
      name: "Marcel",
      surname: "Pavel",
      class: "4.B",
      age: 18 
    },
    {
      name: "Dalibor",
      surname: "Zuzan",
      class: "4.A",
      age: 18  
    },
  ]
  const classesInitialValue=[
    "1.A", "1.B", "2.A", "2.B", "3.A", "3.B", "4.A", "4.B"
  ]

const students = ref(studentsInitialValue)
const Allclasses = ref(classesInitialValue)

const deleteClass = (wantToDeleteClass) =>{

    Allclasses.value = Allclasses.value.filter(item => item != wantToDeleteClass)
    students.value = students.value.filter(item => item.class != wantToDeleteClass)
}

/*const confirmEdit = (wantToEditClass, changeValue) => {

    Allclasses.value = Allclasses.value.filter(item => item != wantToEditClass)
    Allclasses.valie = Allclasses.value.push(changeValue)

    //students.value = students.value.map(item => wantToEditClass.value)
}*/

  export const useData = () => {

    return {Allclasses, students,deleteClass};
  }