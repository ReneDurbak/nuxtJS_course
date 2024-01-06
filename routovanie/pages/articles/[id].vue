<template>
    
    
    <div>
        <NuxtLink to="/articles"><div>Articles</div></NuxtLink>
    <pre>
       {{articles.findLast(item =>  item.id == id )}} 
      <h1>useRoute() funkcia podrobne: </h1>
      {{nem}}
    </pre>

    <div v-on:click="deleteById(id)" class="delete">delete</div>
    </div>
    
</template>
<script setup>

const id = useRoute().params.id //useRoute - obsahuje parametre ktore budeme pouzivat
const articles = useArticles().state.value

const {deleteById} = useArticles();

const nem = useRoute()
</script>

<style scoped>

.detele{
    width: 20px;
    color: red;
    
}


</style>