<script setup>
    defineProps(['person'])

let inputBool = ref(false)

	function clicked() {
   inputBool.value = true
}

function submitClicked(){
	inputBool.value = false

}

const  {removePerson}=usePersons(); //dekonstrukcia - pristupili sme k stavu usePersons, stavy definujeme ako const lebo funckia ako taka sa nemeni
									//vsetky stavy su const, lebo ich struktura sa nemeni, to mozeme pouzivat aj pri objekte napriklad
									// aj toto bude fungovat - const  removePerson=usePersons().removePerson, dostaneme sa ku funkcii cez dot notation
									//v-on:click="removePerson(person)" - zavolame to takto a odovzdame paramater person

</script> 

<template>
    <section v-bind:class="person.age>=18 ? 'adult card': 'card' ">
        <article class="info">
            <div class="name" v-show="inputBool != true">{{person.fname}} {{person.lname}}</div>
            <div v-show="inputBool != false"> Cakam na zadanie mena!</div>
			<div class="age">{{person.age}} <span class="year-title">year</span></div>
			
        </article>
        <footer class="footer-card">
            <span  class="btn edit" @click="$emit('editWasClicked')" v-if="inputBool != true" v-on:click="clicked()" >Edit</span>
            <span v-on:click="removePerson(person)" class="btn remove" v-show="inputBool != true">Remove</span>
			<span class="btn submit" v-show="inputBool != false" v-on:click="submitClicked()" @click="$emit('submitWasClicked', person)">Submit</span>
			

        </footer>
    </section>
</template>




<style scoped>


    .card {
		background: rgba(255,255,255, 1);
		border: 1px solid #bbb;
		color: #444;
		box-shadow: 0 3px 5px rgba(0,0,0,.2);
		border-top-width: 5px;
		border-top-color: dodgerblue;
	}

	#popup{
		visibility: hidden;
	}
	.card.adult {
		border-top-color: orange;
	}
	.card:hover {}
	.info {
		padding: 1rem;
		text-align: center;
		font-size: 1.3rem;
	}
	.name {}
	.age {
		font-weight: 300;
		font-size: 1rem;
	}
	.year-title {
		color: #bbbbbb;
	}
	.footer-card {
		display: flex;
	}
	.btn {
		padding: .75rem 2rem;
		color: white;
		width: 50px;
		flex-grow: 1;
		text-align: center;
		transition: .5s;
		font-size: 1rem;
	}
	

	.btn.submit {
	
		width: 100px;
		background: rgb(91, 236, 91);
		border-radius: 0px 0px 10px 10px;
	}

	
	.btn.edit {
		background: rgb(91, 236, 91);
		border-radius: 0px 0px 0px 10px;
	
	}
	.btn.remove {
		background: red;
		border-radius: 0px 0px 10px 0px;

	}

	.btn:hover {
		opacity: .3;
		cursor: pointer;;
	}
</style>