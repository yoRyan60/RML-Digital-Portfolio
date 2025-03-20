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
            <h1 style="font-family: Retro Computer; color:greenyellow">Feedback</h1>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
        <div class="container-description-center">
            <article> 
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">Regarding this website</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        If you want to leave a comment regarding my portfolio, or even just questions about me or just random rambling, type it in the given form below.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Just click on the icon below to access the form.
                    </p>
                    <br>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe91vrM13I7yigw6adOSZY6OruocGFpQ2RAAavBlKNSj-PNXw/viewform?usp=sf_link" target="_blank"><img class="img-center" src="/src/assets/images/clipboardpixel_icon.png"></a>
                </div>
            </article>
        </div>
    </main>
</template>