let initialPersons = [
  {
    fname: "Magdalena",
    lname: "Mikulova",
    age: 22
  },
  {
    fname: "Mirka",
    lname: "Makovicova",
    age: 30
  },
  {
    fname: "Hugo",
    lname: "Hugovic",
    age: 15
  },
  {
    fname: "Miki",
    lname: "Hric",
    age: 19
  },
  {
    fname: "Andrea",
    lname: "Veresova",
    age: 40
  },
  {
    fname: "Nora",
    lname: "Mojsejova",
    age: 13
  },
]



let persons = ref(initialPersons);

const removePerson = (person) =>{
persons.value = persons.value.filter(item => item != person)

}

export const usePersons = () => { 
  return {persons,removePerson} // pomocoi { } zatvoriek vytvorime objekt a vrati objekt ktory ma property persons a removePerson
                                // nachadza sa tam samotny stav (persons) a aj mutacie (removePerson) - funckie ktore menia stav(tie osoby)
}
