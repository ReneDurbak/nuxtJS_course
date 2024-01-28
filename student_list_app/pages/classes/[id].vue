<template>
    <div>
        <div v-for="student of Clickedclass" v-bind:key = "student">
            <PersonalCards :student="student"></PersonalCards>
        </div>

        <NuxtLink to="/classes/">BACK</NuxtLink>
        <NuxtLink to="/classes/" @click="deleteClass(studentClass)" ><div class="delete">Delete</div></NuxtLink>
        <div @click="editClick()">Edit</div>
        <input v-if="editBool == true" v-model="name">
        <div @click="editConfirm()" v-if="editBool == true">Confirm edit</div>
        

<!--
<pre>
    {{routa}}
</pre>-->


    </div>
</template>

<script setup>

const studentClass = useRoute().params.id;
const allStudents = useData().students.value;
const {deleteClass} = useData()


const Clickedclass = allStudents.filter(item => item.class == studentClass);

const routa = useRoute()


console.log(studentClass)


let name = ref(" ")
let editBool = ref(false)

let editClick = () =>{

    editBool.value = true

}

</script>

<style scoped>

.delete{
    text-decoration: none;
    margin-top: 20px;
    background-color: red;
    width: 50px;
    color: black;
}

</style>