<script setup>
import SubComp from './SubComp.vue';
import Slot from './Slot.vue';
import { ref } from 'vue'
const msgHelloWorld = ref('hello from component');
const childMsg = ref('No msg');

const test = () => {
    childMsg.value = ''
};

const emit = defineEmits(['HelloWorldÒMsg']);
const clickHandlerToApp = ()=>{
    emit('HelloWorldMsg',msgHelloWorld.value)
};
</script>

<template>
    <main>{{msgHelloWorld}}</main>
    <button @click="clickHandlerToApp">message to App</button>
    <h2>{{ childMsg }}</h2>
    <SubComp @compMsg="test" msg="testMsg"></SubComp>
    <SubComp @compMsg="(msg) => childMsg = msg" msg="tes"></SubComp>
    <SubComp @compMsg="(msg) => childMsg = msg" :msg="msg"></SubComp>
    <SubComp @compMsg="(msg) => childMsg = msg" msg="message de"></SubComp>
<H2>Slot</H2>
<Slot>Bonjour je suis un slot</Slot>
</template>

<style scoped>

</style>