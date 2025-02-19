  
<script lang="ts" setup>

function script() {
  console.log("click");

  const socket = new WebSocket(window.location.origin.replace("http", "ws")); // will this even work lol

  // Connection opened
  socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
  });

  // Listen for messages
  socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
  });
}
</script>

<template>
  <div class="">test</div>
  <button @click="script()">test</button>
</template>
