<template>
  
<div> 
  <h1 class="title">
    Counter up 

  </h1>
  
<div class="counter-container">
  <div class="box" v-on:click="minus()">-</div> <!-- v-on:click - skratka: @click -->
  <div   v-if="counter>0" class="box" >{{counter}}</div> <!-- v- funkcie vue, v-show - ked sa podm rovna tak sa element nezobrazi -->
   <div  v-else-if="counter==0" class="zerobox" >zero</div> <!-- v-if a v-else-if ked podmienku plati tak sa zobrazuje co je v semantickych znackach-->
  <div v-else="counter<0" class="minusbox">{{counter}}</div>
   <div class="box" @click="plus()">+</div>

</div>

</div>
</template>


<script setup>


let counter = ref(10);  //ref - moze prijat aj neprimitivne(objekty) aj primitivne typy (cisla)   ref pouzivame ked chcem odrzkadlit nejaku hodnotu do htmlka ked sa updatuje hodnota
                        // reactive nemoze prijat primitivne typy prijima len objekty  

//ked priradime k premennej ref tak ked chceme ziskat jej hodnotu potrebujeme premennu.value


const plus =  ()=>{      

  counter.value++;
  console.log(counter);
}

const minus = ()=>{

  counter.value--;
  console.log(counter);
  
}



</script>


<style>

body{ 
  background-color:aqua;
  display: flex;
  justify-content: center;
}
.title{
  text-align: center;
}
.counter-container{ 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

.minusbox{
  width: 20%;
  font-size:20px;
  text-align: center;
  color: white;
  background-color:rgb(255, 0, 0);
}

.zerobox{
  width: 20%;
  font-size:20px;
  text-align: center;
  color: white;
  background-color:rgb(0, 255, 42);
}

.box{
  width: 20%;
  font-size:20px;
  text-align: center;
  color: white;
  background-color:blue;

}
</style>
