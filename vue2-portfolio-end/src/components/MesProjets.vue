<script setup>
    import { ref } from "vue";
    import ProjectSingle from "./ProjectSingle.vue";

    let projects = ref([
    {
        name: "Le projet N°1",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Le projet N°2",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Le projet N°3",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Le projet N°4",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Le projet N°5",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Le projet N°6",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    ]);

</script>

<template>
    <div id="projects">
        <h2 class="text-highlight-1 section-title">Quelques projets</h2>
        <ProjectSingle v-for="(project, index) in projects" :key="project.name" :project="project" :reverse="index % 2 === 0 ? false : true" />
    </div>
</template>

<style scoped>
    #projects {
        display: inline-block;
        margin-top: 60px;
    }
</style>