<script setup>
    import SocialIcon from './SocialIcon.vue';
</script>

<template>
    <div id="top-line">
        <img id="profile-img" src="../assets/me.png" alt="me" width="300px" height="300px" />
        <div id="line">
            <p>Je suis <span class="text-highlight-1">Anthony CARDINALE</span>, <br/>
                    Ingénieur en informatique.</p>
            <div id="social">
                <SocialIcon img="yt" alt="youtube" link="https://www.youtube.com/@F0rmati0nFacile" />
                <SocialIcon img="in" alt="linkedin" link="https://www.linkedin.com/in/anthony-cardinale-%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-39474243/" />
                <SocialIcon img="ud" alt="udemy" link="https://www.udemy.com/user/cardinale-anthony/" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    #top-line {
        margin-top: 50px;
        width: 100%;
        height: 300px;
    }

    #top-line #profile-img {
        float: left;
        margin-right: 50px;
    }

    #top-line #line {
        float: left;
        transform: translateY(40%);
        text-align: center;
    }

    #top-line p {
        font-size: 42px;
        line-height: 60px;
    }

    #top-line p span {
        font-weight: bold;
    }

    #social {
        margin-top: 15px;
    }

    @media screen and (max-width: 905px) {
        #top-line #profile-img {
            display: none;
        }

        #top-line #line {
            float: none;
            transform: translateY(0%);
        }

        #top-line p {
            font-size: 36px;
        }
    }
</style>