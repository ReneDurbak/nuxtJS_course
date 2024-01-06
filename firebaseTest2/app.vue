<template>
  <div class="book-container" v-for="book of books" :key="book">
    <Book :title="book.title"  :author="book.author" :pages="book.pages"></Book>
  </div>
</template>

<script setup>

const books = useState().Allbooks.params;

</script>

<style>

</style>
