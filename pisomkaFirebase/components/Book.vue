<script setup>
defineProps(['title', 'author', 'pages'])


const colorPicker = (pages) => {

  if(pages < 10 ){
    return('background-color: red;')
  }else if(pages >= 10 && pages < 20){
    return('background-color: orange;')
  }else{
    return('background-color: green;')
  }
}

</script>

<template>
<div class="book-container" :style="`${colorPicker(pages)}`">
  <div class="title">{{title}} </div>
  <div>{{author}} </div>
  <div>pocet stran: {{pages}} </div>
  </div>
</template>

<style scoped>
.book-container{
  width: 10%;
  margin: 25px;
  padding: 12px;
  border-radius: 10px;
}

.title{
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 10px;
}
</style>
