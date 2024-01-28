<template>
    <div>
        <div>{{student.name}} {{student.surname}}</div>
        <div>{{student.age}}</div>

    </div>
</template>

<script setup>

defineProps(['student'])

</script>

<style scoped>

</style>