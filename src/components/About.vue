<script>
export default {
    methods: {
        gotoHome(){
            this.$router.push('/')
        },
    },  
}
</script>

<template>
    <main>
        <div class="heading-container">
            <h1 style="font-family: Retro Computer; color:greenyellow">About</h1>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
        <div class="container-description-left">
            <article> 
                <img class="img-left" src="/src/assets/images/info_pixel_icon.png">
                <h2 class="container-description-header">Regarding this website</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        The name of the website being RML Digital Portfolio, the "RML" part is based on my name; Ryan Matthew Lim.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        This website contains information about my school life, work experiences like OJT, and achievements that I'd like to show you.
                        I'll even add more as I go on in my eventual career.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Icons by Freepik, Flaticons & Google Images. Website made with basic HTML and CSS. As well as Vue.js. All credit goes to them.
                    </p>
                    <br>
                    <p class="container-description-text" style="font-style: italic;"> 
                        <span style="color: greenyellow">Trivia: </span> The first iteration of this website was made with 
                        <span style="color: greenyellow;"><a href="https://sites.google.com/benilde.edu.ph/rml-digitalportfolio/home" target="_blank">Google Sites.</a></span>
                    </p>
                </div>
            </article>
        </div>
    </main>
</template>