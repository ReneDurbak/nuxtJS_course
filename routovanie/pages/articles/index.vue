<script setup>
 const articles = useArticles().state.value //pristupili sme k polu objektov
 console.log(articles)

 
</script>

<template>
  <div>
    <h1>List of Articles</h1>
    <NuxtLink to="/"><div>Home</div></NuxtLink>
    <div v-for="item of articles" v-bind:key="item">
      <NuxtLink :to="{path: `/articles/${item.id}`,params:{id: item.id}}">{{item.title}}</NuxtLink> <!-- :to lebo je to dynamicke - v-for iterujeme dynamicky a tiez :to{} - davame don objekt lebo prebera genericka page parametre, cize si ju mozeme predstavit ako funkciu-->
    </div>
  </div>
</template>

<style scoped>
</style>