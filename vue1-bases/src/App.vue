<script setup>
import { ref } from 'vue';
//variable
const msg = ref('Message');
const msg2 = ref('Message 2');
let msg3 = ref('Message 3');
msg3.value = 'Etait à l\'école';
let msg4 = ref('Modifier le message ');
let count = ref(0);
//fn
const incrementer=()=>{
  count.value++;
}
const modifierMessage=()=>{
  const nouvelleValeur = prompt('Modifier le message');
  msg4.value = nouvelleValeur;
};

</script>

<template>
<main>
  <!-- <h1>{{ msg }}</h1>
  <h2>{{ msg2.toUpperCase() }}</h2>
  <h3>{{ msg3 }}</h3> -->
  <h1>{{msg4 }}</h1>
  <h2>{{ count }}</h2>
  <button @click="incrementer">Incrementer</button>
  <br></br> <br></br> <br></br>
  <button @click="modifierMessage">Modifier le message</button>
  </main>
</template>

<style scoped>


</style>
