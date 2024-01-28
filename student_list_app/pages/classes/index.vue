<template>

    <div class="class-container">
    <div v-for="studentClass of allClasses" :key="studentClass">
        <NuxtLink :to="{path:`/classes/${studentClass}`, params:{id:studentClass}}">
            {{studentClass}}
        </NuxtLink>
    </div>
    </div>

</template>

<script setup>

const allClasses = useData().Allclasses.value

console.log(allClasses)

</script>

<style scoped>

.class-container{
    display: inline-block;
}

</style>