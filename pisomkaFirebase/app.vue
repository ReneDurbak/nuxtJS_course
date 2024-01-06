<template>
  <div>
    <div v-for="book of books" :key="book">
      <Book :title="book.title" :author="book.author" :pages="book.pages"></Book>
    </div>

  </div>
</template>

<script setup>

const books = useLibrary().library.Allbooks

books.sort((a,b) => b.pages - a.pages)

</script>

<style >
</style>