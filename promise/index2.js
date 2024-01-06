
//-----------------REST & SPREAD------------------------------------------------------------------------------


/*const {name, surname, ...otherInfo} = [{
    name: "Maros",
    surname: "Kuceravy",
    age: 18,
    address: 68,
    gender: 89, 
    
}]

console.table(otherInfo)*/



/*
const name = "Samuela";

aka(name)

function aka (name){
    name = [...name]
    console.log(name.filter(item => item=='a'));
    
}*/

//-----------------------------FETCHE--------------------------------------------------------------------------------------


/*
baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo";

initialFetch()

//initialFetch2()

function initialFetch(){
    fetch(`${baseUrl}/todoList`)
    .then((response) => response.json())
    .then((data) => {console.log(data); return data})
    .then(processData)
   
}

    


/*async function initialFetch2(){
    let response = await fetch(`${baseUrl}/todoList`)
    let data = await response.json()
 
    console.log(data)
}*/
/*

function processData(data){
    
    console.log(data.filter(item => item.id > 4))
    console.table(data.sort((a,b) => a.id - b.id))
    
}*/




let persons= [
    // 1.osoba
    {
    name: "Jozef",
    surname: "Nagy",
    birthday: {
        year: 1999,
        month: 5,
        day: 13
    },
    
    address: {
        street: "Stredná",
        number: 23,
        city: "Víťaz",
        postalCode: "082 38"
    },
    predstavnie: ()=>{

        console.log( `Ahojte, ja som ${persons[0].name}ko.`)

    }
},


// 2.osoba
{
    name: "Jozef",
    surname: "Nebezpecny",
    birthday: {
        year: 1995,
        month: 5,
        day: 8
    }
    ,
    address: {
        street: "Stredná",
        number: 64,
        city: "Víťaz",
        postalCode: "082 38"
    }
},

// 3.osoba
{
    name: "Bonifac",
    surname: "Nepriestrelny",
    birthday: {
        year: 1975,
        month: 5,
        day: 3
    }
    ,
    address: {
        street: "Dobra",
        number: 89,
        city: "Kosice",
        postalCode: "082 38"
    }
},
]


persons[0].predstavnie()

console.table(persons.sort((a,b)=> b.address.number- a.address.number ))

console.table(persons.filter(item => item.name != "Bonifac"))


