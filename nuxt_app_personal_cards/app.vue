<template>
    <main>
      <h1>Zoznam ľudí</h1>
      <section class="list">
        <section v-for="person of persons" v-bind:key="person" class="card-container">
			<PersonalCard v-bind:person="person"></PersonalCard>
        </section>
      </section>
	  <button class="deleteAll" v-on:click="deleteAll">Delete ALL</button>
    </main>
</template>

<script setup>
let persons = ref([
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
	])


function deleteAll(){
	persons.value = [];
}



</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600;700&display=swap');
	body {
		font-size: 10px;	
		font-family: 'Oswald', sans-serif;
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
	.deleteAll{

		font-family: 'Oswald', sans-serif;
		width: 120px;
		height: 60px;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
		color: black;
		font-size: 18px;
		background-color: red;
		padding: 6px;
		transition: .4s ease-in-out;
		margin-top: 4px;
	
	}

	.deleteAll:hover{
		transform: scale(1.1);
	}

</style>

