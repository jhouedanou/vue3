<script setup>
    
</script>

<template>
<div id="livres">
        <h2 class="text-highlight-1 section-title">Mes livres</h2>
        <p class="description">Pour compléter mes formations vidéo, <span class="text-highlight-2">j'écris des livres</span>. J'ai publié 
            une dizaine de bouquins aux <span class="text-highlight-2">éditions d-booker</span>. 
            Je publie principalement des ouvrages sur le développement de jeux vidéo car il y a peu de livres sur le sujet par rapport aux 
            nombreux logiciels qui existent. Voici mes principaux livres :
        </p>
        <div id="listing">
            <!-- Unity -->
            <div class="livre">
                <img src="../assets/livre-unity.png" alt="unity"/>
                <h3 class="text-highlight-1">Unity</h3>
                <p>Apprendre à créer des jeux avec Unity et C#.</p>
                <a href="https://www.d-booker.fr/developpement-de-jeux-video/622-1077-creer-des-jeux-de-a-a-z-avec-unity-3ed.html#/21-option-consultation_en_ligne" target="_blank">Voir le livre</a>
            </div>
            <!-- Unity -->
            <div class="livre">
                <img src="../assets/livre-kit.jpg" alt="unity"/>
                <h3 class="text-highlight-1">No Code</h3>
                <p>Apprendre à créer des jeux sans coder.</p>
                <a href="https://www.d-booker.fr/developpement-de-jeux-video/584-1020-creer-un-jeu-video-sans-coder-avec-unity.html#/21-option-consultation_en_ligne" target="_blank">Voir le livre</a>
            </div>
            <!-- Blender -->
            <div class="livre">
                <img src="../assets/livre-blender.jpg" alt="blender"/>
                <h3 class="text-highlight-1">Blender</h3>
                <p>Modéliser des assets de jeux en 3D.</p>
                <a href="https://www.d-booker.fr/developpement-de-jeux-video/787-1322-creation-d-assets-3d-pour-le-jeu-video-avec-blender-2E.html#/21-option-consultation_en_ligne" target="_blank">Voir le livre</a>
            </div>
            <!-- Godot -->
            <div class="livre">
                <img src="../assets/livre-godot.jpg" alt="godot"/>
                <h3 class="text-highlight-1">Godot</h3>
                <p>Créer des jeux avec Godot, le moteur libre.</p>
                <a href="https://www.d-booker.fr/developpement-de-jeux-video/799-1334-developper-des-jeux-avec-godot-4-et-le-langage-csharp.html#/21-option-consultation_en_ligne" target="_blank">Voir le livre</a>
            </div>
            <!-- Love -->
            <div class="livre">
                <img src="../assets/livre-love.png" alt="love"/>
                <h3 class="text-highlight-1">Love2D</h3>
                <p>Coder des jeux 2D en LUA avec Love2D.</p>
                <a href="https://www.d-booker.fr/developpement-de-jeux-video/654-1194-initiation-a-la-creation-de-jeux-video-en-lua-avec-love2d.html#/21-option-consultation_en_ligne" target="_blank">Voir le livre</a>
            </div>
        </div>
        <a id="auteur" href="https://www.d-booker.fr/auteurs?id_author=31" target="_blank">Voir tous mes livres</a>
    </div>
</template>

<style scoped>
    #livres {
        margin-top: 60px;
    }
    #livres .description {
        text-align: justify;
        font-size: 19px;
    }
    #listing {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-top: 35px;
    }
    .livre img {
        width: 100%;
    }
    .livre h3 {
        font-size: 20px;
        font-weight: bold;
    }
    .livre p {
        font-size: 17px;
        text-align: justify;
    }
    .livre a {
        color: white;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
    #auteur {
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
        margin-bottom: 40px;
    }
    @media screen and (max-width: 600px) {
        #listing {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 20px;
        }
    }
</style>