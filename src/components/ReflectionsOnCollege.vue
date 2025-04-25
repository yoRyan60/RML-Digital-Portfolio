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
            <h1 style="font-family: Retro Computer; color:greenyellow">Reflections on College</h1>
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
                <img class="img-left" src="/src/assets/images/pixelbook_icon.png">
                <h2 class="container-description-header">What I've learned</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Simply submit stuff on time. 
                        The earlier the better, since you'll be able to have more time to yourself until the next assignment.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Being diligent in my workload allowed me to finish them not only quickly, but also finish it with quality.
                        And every now and then, it doesn't hurt to be creative. It's what makes my less monochrome and more vivid.
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-right">
            <article> 
                <img class="img-right" src="/src/assets/images/pixelgroup_icon.png">
                <h2 class="container-description-header">College Life</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Most of the time I tend to do academics on my own. Sound sad I know, but it did help me avoid being to reliant on others.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        As for me, my friend circle wasn't much, mainly just my mates in capstone. 
                        Though I am fine with small talk, especially if its something I can relate to.
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-left">
            <article> 
                <img class="img-left" src="/src/assets/images/pixelquestionmark_icon.png">
                <h2 class="container-description-header">Next steps for me</h2>
                <div class="text-wrapper">
                    <br>
                    <p class="container-description-text"> 
                        I'll look for a job as a Programmer, maybe even a Web developer to be more specific considering 
                        I've had experience with it in thesis and even now with the creation of this website.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I plan on also going back to the game I've made in 1st Year College, Generic Spaceshooter. 
                        Definitely need to think of a different name for it though.
                    </p>
                    <br>
                    <p class="container-description-text">
                        P.S. I've made progress on said game, but there's lots more to do.
                    </p>
                    <br>
                </div>
            </article>
        </div>
        
        <div class="container-description-center">
            <article> 
                <img class="img-center" src="/src/assets/images/lightbulbpixel_icon.jpg">
                <h2 class="container-description-header">Commitment Statement</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        I commit to continue exploring technology as it advances, understanding it's complexity and find to use it in everyday life. 
                        Maintaining the balance between working and having fun as gaming will never be a thing that I'll get tired of.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Know my weaknesses and find workarounds to make things work. 
                        Think outside the box when things really get difficult to deal with. 
                        Apply what I've learned in College in real life scenarios that may occur through my life from here on out. 
                        Know when to stop or keep going as time moves forward. Every decision I make is more or less final and cannot be reversed. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Take chances or opportunities in life when they appear as they are limited and never show up even again. 
                        And finally, live life to the fullest, do the things I need to do and also do the things I want, which is gaming.
                        One day I will be online in-game for the very last time, but that time is not now, not yet.
                    </p>
                    <br>
                </div>
            </article>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
    </main>
</template>