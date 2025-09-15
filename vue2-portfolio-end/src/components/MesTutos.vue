<script setup>
    
</script>

<template>
    <div id="tutos">
        <h2 class="text-highlight-1 section-title">Mes formations vidéo</h2>
        <p class="description">Comme expliqué précédemment, j'aime <span class="text-highlight-2">partager mes connaissances</span> notament grâce à des 
            <span class="text-highlight-2">tutos vidéo</span>. Pour vivre de ma passion, 
            j'ai créé mon entreprise qui me permet de mettre en vente des <span class="text-highlight-2">formations vidéo</span>. Je travaille 
            principalement sur <span class="text-highlight-2">Udemy</span>, leader du marché. 
            Je suis d'ailleurs <span class="text-highlight-2">partenaire formateur</span> de la plateforme et créateur de nombreux cours. 
            Voici quelques-unes de mes formations :
        </p>
        <div id="formations">
            <!-- Unity -->
            <div class="formation">
                <img src="../assets/unity.png" alt="unity"/>
                <h3 class="text-highlight-1">Unity</h3>
                <p>La formation Unity la plus poussée du web avec 160h de contenu.</p>
                <a href="https://www.udemy.com/course/formation-unity-par-la-pratique-le-cours-ultime-tout-en-1-unity/?referralCode=F158E1E111F89AEEAB52" target="_blank">Voir sur Udemy</a>
            </div>
            <!-- Unreal -->
            <div class="formation">
                <img src="../assets/unreal.png" alt="unreal"/>
                <h3 class="text-highlight-1">Unreal Engine</h3>
                <p>Unreal est le principal concurrent d'Unity, j'y dédie un cours complet.</p>
                <a href="https://www.udemy.com/course/developpeur-unreal-engine-5-blueprint-guide-complet-creer-des-jeux/?referralCode=F64A352381462AF5F520" target="_blank">Voir sur Udemy</a>
            </div>
            <!-- Godot -->
            <div class="formation">
                <img src="../assets/godot.png" alt="godot"/>
                <h3 class="text-highlight-1">Godot</h3>
                <p>Godot est le moteur libre et open source. L'outsider qui monte.</p>
                <a href="https://www.udemy.com/course/godot-engine-creation-de-jeux-3d-avec-le-moteur-libre-et-gdscript/?referralCode=0A8D82AD8A8C775FEA77" target="_blank">Voir sur Udemy</a>
            </div>
            <!-- Blender -->
            <div class="formation">
                <img src="../assets/blender.png" alt="blender"/>
                <h3 class="text-highlight-1">Blender</h3>
                <p>Mon cours sur le logiciel de modélisation 3D libre et open source.</p>
                <a href="https://www.udemy.com/course/blender-29-lts-tutoriel-complet-pour-debuter-en-modelisation-scene-3d/?referralCode=CE177CC8D6DD8CF2780A" target="_blank">Voir sur Udemy</a>
            </div>
            <!-- MJ -->
            <div class="formation">
                <img src="../assets/midjourney.png" alt="midjourney"/>
                <h3 class="text-highlight-1">Midjourney</h3>
                <p>L'outil de référence sur la génération d'images par IA.</p>
                <a href="https://www.udemy.com/course/midjourney-creez-vos-images-par-ia-le-guide-ultime-discord-midjourney/?referralCode=886CFD9C0D4FEA614401" target="_blank">Voir sur Udemy</a>
            </div>
            <!-- IA -->
            <div class="formation">
                <img src="../assets/llama.png" alt="llama"/>
                <h3 class="text-highlight-1">IA générative</h3>
                <p>je propose des cours sur ChatGPT, Llama, Mistral, Gemini et plus.</p>
                <a href="https://www.udemy.com/course/llama-le-cours-ultime-sur-l-ia-conversationnelle-de-meta-chatbot/?referralCode=686F3AE547CA3ACF6665" target="_blank">Voir sur Udemy</a>
            </div>
        </div>
        <a id="formateur" href="https://www.udemy.com/user/cardinale-anthony/" target="_blank">Voir mes ~40 formations</a>
    </div>
</template>

<style scoped>
    #tutos {
        margin-top: 60px;
    }
    #tutos .description {
        text-align: justify;
        font-size: 19px;
    }
    #formations {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 50px;
        margin-top: 35px;
    }
    .formation img {
        width: 100%;
    }
    .formation h3 {
        font-size: 20px;
        font-weight: bold;
    }
    .formation p {
        font-size: 17px;
        text-align: justify;
    }
    .formation a {
        color: white;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
    #formateur {
        line-height: 40px;
        color: white;
        text-decoration: underline;
        text-underline-offset: 4px;
        font-size: 20px;
        font-weight: bold;
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }

    @media screen and (max-width: 600px) {
        #formations {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 20px;
        }
    }
</style>