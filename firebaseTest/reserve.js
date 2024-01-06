/*
<template>
  <div>
    <input v-model="messageContent">
    <button @click="handleSend">Add message</button>
    <div class="message-container">
      <div class="message" v-for="item of messenger.list" :key="item">
      <div>{{item.content}}</div>
      </div>

    </div>
  </div>
</template>


<script setup>


let messageContent = "";
const messenger = useMessenger();

const handleSend = () =>{
  messenger.send(messageContent)
  console.log(`Add message was pressed: ${messageContent}`)
}

</script>

<style scoped>

</style>

*/