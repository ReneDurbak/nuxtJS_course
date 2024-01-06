<template>
    <main>
      <h1>Zoznam ľudí</h1>
      <section class="list">
        <section v-for="person of persons" v-bind:key="person"
        v-bind:class="{'card-container':true,'card':true,'adult':ageCalc(person)>=18 }"><!--v tomto prípade clase priradíme objekt, ktorého vlastnosti predstavujú jednotlivé triedy a ich hodnoti predstavujú bool vyjadrujúci, kedy sa má daná trieda pridať danému elemntu-->
		<!--alebo takto tu to poriešime ternárnym operátorom...
		<section v-for="person of persons" v-bind:key="person" 
		v-bind:class="person.age>=18 ? 'adult card-container card' : 'card-container card'">
		-->
          <article class="info">
            <div class="name">{{person.fname}} {{person.lname}}</div>
            <div class="age"  ><span class="year-title">birthday:</span>{{person.birthday}}<br><span class="year-title"> age:</span> {{ageCalc(person)}}  </div>
	
          </article>
          <footer class="footer-card">
            <span class="btn edit">Edit</span>
            <span class="btn remove">Remove</span>
          </footer>
        </section>
      </section>
    </main>
</template>

<script setup>
let persons = [
		{
			fname: "Magdalena",
			lname: "Mikulova",
			birthday: 2000,
				
		},
		{
			fname: "Mirka",
			lname: "Makovicova",
			birthday: 1992,
			
		},
		{
			fname: "Hugo",
			lname: "Hugovic",
			birthday: 2007,
		
		},
		{
			fname: "Miki",
			lname: "Hric",
			birthday: 2003,
		
		},
		{
			fname: "Andrea",
			lname: "Veresova",
			birthday: 1982,
		
		},
		{
			fname: "Nora",
			lname: "Mojsejova",
			birthday: 2009,
			
		},
	]

	function ageCalc({birthday}){
		const currentYear = new Date().getFullYear();
		return currentYear-birthday
	}

</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600;700&display=swap');
	
	h1{
		text-align: center;
		font-size: 35px;
		font-family: 'Oswald', sans-serif;
		

	}
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
	.card {
		border-radius: 15px;
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
		border-radius: 15px;
	}
	.card:hover {
		transform: scale(1.1);
	}
	.info {
		padding: 1rem;
		text-align: center;
		font-size: 1.3rem;
	}
	.name {
		font-size: 25px;
		margin-bottom: 5px;
		color:black;
	}
	.age {
		font-weight: 300;
		font-size: 1rem;
		font-weight: normal;
		color:rgba(59, 59, 59, 0.89);
	}

	.year-title {
		color: #a7a5a5;
		font-weight: 400;
		font-size: 16px;
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
	.btn.edit {
		background: rgb(91, 236, 91);
		border-radius: 0px 0px 0px 15px;
	
	}
	.btn.remove {
		background: red;
		border-radius: 0px 0px 15px 0px;

	}
	.btn:hover {
		opacity: .3;
		cursor: pointer;;
	}
</style>

