<template>
  <div class="to-do-container">
    <h1>TO DO LIST</h1>
    <input placeholder="Etner task" v-model="taskText" v-if="clickedBool == false">
    <input type="date" v-model="deadline"  v-if="clickedBool == false">

    <div class="button-container">
    <button  v-if="clickedBool == true" @click="clickBool()" class="add-bool">Add</button>
    <button  v-on:click="handleClickAdd" v-if="clickedBool == false" @click="clickBool()" class="add">Add</button>
    <button  v-if="clickedBool == false" @click="clickBoolCancel()" class="cancel">Cancel</button>
    </div>

    <div class="alltasks">
    <div v-for="task of tasks" :key="task.id" class="task-container">
      <div><strong>task:</strong> {{task.TaskText}} </div>
      <div><strong>deadline:</strong> {{task.Deadline}} </div>
      <br>
    </div>
  </div>

  </div>
</template>


<script setup>

const {addTask, tasks} = useTasks();
let taskText = ref("")
let deadline = ref("")
const clickedBool = ref(true)

const handleClickAdd = () => {
  addTask({TaskText:taskText.value, Deadline:deadline.value})
  taskText.value = ""
  deadline.value = ""
}

const clickBool = () => {
  clickedBool.value = !clickedBool.value
}

const clickBoolCancel = () =>{
  clickedBool.value = !clickedBool.value
   taskText.value = ""
  deadline.value = ""
}

</script>

<style scoped>
.button-container{
  margin-bottom: 50px;
}
.to-do-container{
  display: grid;
  place-items: center;
  border: 1px solid black;
  margin-left: 475px;
  margin-right: 475px;
  margin-top: 25px;
  padding: 20px;
  border-radius: 75px;
  background: rgba(240, 255, 255, 0.295);
}
.alltasks{
  border: 1px solid black;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 25px;
  background-color: rgba(126, 139, 139, 0.171);

}
.task-container{
  margin-top: 10px;
}



.add-bool{
background-color: rgb(0, 255, 42) ;
border-radius: 5px;
padding: 5px;
}


.add{
background-color: rgb(0, 255, 42) ;
border-radius: 5px;
padding: 5px;
margin-right: 10px;
margin-top: 5px;
}

.cancel{
  background-color: red ;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
}
</style>