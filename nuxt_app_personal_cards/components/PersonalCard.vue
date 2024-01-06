<script setup>
    defineProps(['person'])
</script> 

<template>
    <section v-bind:class="person.age>=18 ? 'adult card': 'card' ">
        <article class="info">
            <div class="name">{{person.fname}} {{person.lname}}</div>
            <div class="age">{{person.age}} <span class="year-title">year</span></div>
        </article>
        <footer class="footer-card">
            <span class="btn edit">Edit</span>
            <span class="btn remove">Remove</span>
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
	.btn.edit {
		background: rgb(91, 236, 91);
	}
	.btn.remove {
		background: red;
	}
	.btn:hover {
		opacity: .3;
		cursor: pointer;;
	}
</style>