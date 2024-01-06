//---------------KOMPONENT PLUS EVENTY---------------

<template>
    <main>
      <h1>Zoznam ľudí</h1>
      <section class="list">
        <section v-for="person of persons" v-bind:key="person" class="card-container">
			<PersonalCard  @editWasClicked="clickMe" @submitWasClicked="editPerson" v-bind:person="person">
				
			</PersonalCard>
			
        </section>
      </section>
	  <button v-show="boolDelete!=true" class="deleteAll" v-on:click="deleteAll">Delete ALL</button> <!-- deleteAll() tiez moze byt-->
	 	
	  <div class="form__group">
	  <input placeholder="Name" v-model="name" v-show="inputBool != false" class="form__input">
	  <label for="name" class="form__label">First Name</label>
	  </div>
	
	</main>
</template>


<script setup>

	let persons = usePersons().persons; //lebo sa chceme dostat ku property persons
	let boolDelete = ref(false);   //Cely tento bool funguje aj bez refu ale radsej ho tam davame lebo napr. v reacte to funguje len cez ref

	const deleteAll = () => {
		boolDelete.value = true; //boolDelete.value = !boolDelete.value
		persons.value = [];
		name.value = "";
	}


	let inputBool = ref(false)

	function clickMe() {
   inputBool.value = true;
}

const editPerson = (personShouldBeEdited) =>{
	inputBool.value = false;

	persons.value.forEach(item =>{

	
		if(item == personShouldBeEdited){
			item.fname = name.value
		
	}

	 })
	name.value = ""; 
	 
	 
}


	//--------------------SUBMIT FORMULAR-------------------------

	let name = ref("")


</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600;700&display=swap');
	*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-size: 62,5%;
}

*{

	font-family: 'Oswald', sans-serif;
}

	body {
		font-size: 10px;	
		padding: 1rem;
	}
	main {
		display: flex;
		flex-direction: column;
		gap: .75rem;
	}
	.list {
		display: flex;
		gap: 20px;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: stretch;
		font-size: 1.2rem;
	}
	.card-container {
		flex-grow: 1;
	}
	h1{
		text-align: center;
		font-size: 35px;
		

	}
	.card {
		border-radius: 10px;
		background: rgba(255,255,255, 1);
		border: 1px solid #bbb;
		color: #444;
		box-shadow: 0 3px 5px rgba(0,0,0,.2);
		border-top-width: 5px;
		border-top-color: dodgerblue;
		transition: transform 0.2s ease-in-out;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	.card.adult {
		border-top-color: orange;
		border-radius: 10px;
	}
	.card:hover {
		transform: scale(1.1);
	}
	.deleteAll{
	
		width: 120px;
		height: 60px;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
		color: black;
		font-size: 18px;
		background-color: rgb(196, 89, 89);
		padding: 6px;
		transition: .4s ease-in-out;
		margin-top: 4px;
	}

	.deleteAll:hover {
		transform: scale(1.1);
	}

	

  .form__label {
 
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
  color: rgb(110, 110, 110)
}

.form__input {

  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  padding: 1.5rem 2rem;
  max-width: 100%;
  min-width: 50%;
  border-radius: 10px;
  background-color: rgba(123, 124, 123, 0.37);
  border: 1px solid black;
  width: 90%;
  display: block;
  transition: all 0.3s;
}

.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-4rem);
  transform: translateY(-4rem);
}

</style>

