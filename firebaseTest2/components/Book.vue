

<template>
<div>
  <div class="book" :style="`background-color: ${colorBasedOnPages(pages)};`">
  <div class="title"> {{ title }} </div>
   <div>{{ author }}</div> 
    <div>{{ pages }}</div>
    <br>
  </div>
</div>
</template>

<script setup>
defineProps(['title','author','pages'])

const colorBasedOnPages = (pages) => {
  if(pages >= 50){
    return('red');
  }else if(pages<50 && pages >=25){
    return('yellow');
  }else{
    return('green')
  }
}

</script>

<style scoped>
.title{
  font-weight: bold;
  font-size: x-large;
}

.book{
  width: 10%;
  padding: 8px;
  margin: 25px;
  border-radius: 10px;
}
</style>
