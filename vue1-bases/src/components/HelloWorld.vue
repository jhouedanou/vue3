<script setup>
import SubComp from './SubComp.vue';
import { ref } from 'vue'
const msg = ref('hello from component');

</script>

<template>
    <main>{{msg}}</main>
    <SubComp msg="testMsg"></SubComp>
    <SubComp msg="tes"></SubComp>
    <SubComp :msg="msg"></SubComp>
    <SubComp msg="message de"></SubComp>
    
</template>

<style scoped>

</style>