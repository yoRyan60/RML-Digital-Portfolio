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
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">Regarding this website</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        The name of the website being RML Digital Portfolio, the "RML" part is based on my name; Ryan Matthew Lim.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        This website contains information about my school life, work experiences like OJT, and achievements that I'd like to show you.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Icons by Freepik, Flaticons & Google Images. Website made with basic HTML and CSS. As well as Vue.js.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Almost all images, and graphics used in this website belong to their respective owners and I do not claim any right over them.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px; font-style: italic;"> 
                        <span style="color: greenyellow">Trivia: </span> The first iteration of this website was made with 
                        <span style="color: greenyellow;"><a href="https://sites.google.com/benilde.edu.ph/rml-digitalportfolio/home" target="_blank">Google Sites.</a></span>
                    </p>
                </div>
            </article>
        </div>
    </main>
</template>