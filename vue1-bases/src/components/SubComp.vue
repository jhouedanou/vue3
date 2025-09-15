<script setup>
const props = defineProps({
    msg:{
        type:String,
        required:true,
        default:"pas de propriété définie"
    }
});

const emit = defineEmits(['compMsg']);
const clickHandler = () => {
    console.log('clicked '+props.msg)
    emit('compMsg')
};

</script>

<template>
    <main>{{msg}}</main>
    <button @click="clickHandler">click</button>
</template>

<style scoped>

</style>