//-------------------MOJE------------------------------------------------------


/*let variable = 0

setTimeout(()=>variable=5,2000)

setTimeout(()=>console.log(variable),2000)*/



/*let promise = new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),4000)
}).then((response) =>respone).then()*/

/*
let baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo"

let myData;
//initialFetch();
initialFetch2();

function initialFetch(){
    fetch(`${baseUrl}/todoList`)
    .then((response)=>response.json())
    .then((data)=>myData=data)
}


async function initialFetch2(){
    let response = await fetch(`${baseUrl}/todoList`)
    let data = await response.json()
    console.log(data)
}

*/



//----------------OD MARKUSA------------------------------------------------------


//  setTimeout(parameter_funkcia, cas_ms)
/*
setTimeout(() => console.log('Hello'), 5000); //po 5s vypise v konzoli hello

let vriable = 0;

setTimeout(() => vriable = 5, 5000); //prikaz sa vykonava len na pozadi nie je vypisana

setTimeout(() => console.log(vriable), 5000);
*/

//Po vytvoreni promisu je stav pendding

let promis = new Promise(function (resolve, reject) {

    //stavy | resolve(1) | reject(0)
    //metoda na zmenenia stavu | .then()

    //setTimeout(() => reject("Hello world"), 4000);
    setTimeout(() => resolve("Hello world"), 4000);

})
.then((response) => console.log(`Fullfilled ${response}`)); // then je zavisly na zmene stavu
//.then((response) => response));
//.catch((response) => console.log(`Rejected ${response}`));
//.finally();


//Fetching servera

baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo";   //Premena s adresou servera

/*
fetch(`${baseUrl}/todoList`)    //fetch (premena_adresy, /odkaz)
    .then((response) => console.log(response.json()))   //metoda then, ktora vytiahne response a zmeni na json
    .then((data) => console.log(data))  //metoda then, ktora vypise json(data)
*/

//Funkcia ne fetchovanie dat
/*
let myData;
initialFetch();

function initialFetch() {
    fetch(`${baseUrl}/todoList`)
        .then((response) => {console.log(response); return response.json()})
        .then((data) => console.log(data))
};

*/
/*
fetch vracia promis(objekt) -state (na zaciatku pending) -result (na zacitaku undefined) -funkcia then(zavola sa vtedy ak state == fullfield - vtedy vrati do resultu response zo serveru, ktory odovzdavame ako paramter -> then) -funkcia catch
*/

// ASYN funkcia fetchovanie dat
/*
let myData;
initialFetch();

async function initialFetch() {
    let response = await fetch(`${baseUrl}/todoList`)
    let data = await response.json()

    console.log(data);
};
*/



//-------------------THEN-----------------------------


/*
baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo";

//let myData;

fetch(`${baseUrl}/todoList`)
    .then((response) => { console.log(response); return response.json() })
    .then((data)=> processData(data))
    //.then(processData)

// Vytvorenie funkcie na spracovanie dat
function processData(data) {
    myData = data
    console.log(myData)
    console.log(data.filter(item => item.id > 4))

}

*/

