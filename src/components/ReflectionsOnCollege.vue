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
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">What I've learned</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Similar to things in high school when it comes to academics, submit stuff on time. 
                        If you can finish it earlier the better, because if you do, you'll be able to have more time to yourself until the next assignment.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Every now and then, it doesn't hurt to become creative in some requirements. 
                        Because this is the first and last time I'm doing it anyway so I'll do my best. 
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Being diligent in my workload allowed me to finish them not only quickly, but also finish it with quality.
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-right">
            <article> 
                <img class="img-right" src="/src/assets/images/pixelgroup_icon.png">
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">College Life</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        I know that out there in other colleges, there are in fact students who either solo or are required to make their thesis on their own. 
                        I salute to them, because man that ain't gonna be easy but if they can handle it, that's what matters the most.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        As for me, my friend circle wasn't much, mainly just my mates in capstone. 
                        I do talk to others outside of this circle, but mainly just chatting about random stuff. 
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-left">
            <article> 
                <img class="img-left" src="/src/assets/images/pixelquestionmark_icon.png">
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">Next steps for me</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;;"> 
                        Well, what I want is a break, I know I probably had that many times already during my stay in college. 
                        But man all of this has been quite the ride that I want to lie down for a moment, gather my thoughts and reflect on the many achiements I've attained and how far I've gone.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Afterwhich I'll look for a job as a "Junior Programmer", as much as I've learned a lot in college, this is only the beginning.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        I plan on also going back to the game I've made in 1st Year College, Generic Spaceshooter. 
                        Though sadly this name for a game has obviously already been taken.
                         I'll likely need to create a much more original name but originality is hard to have these days with many games likely having a similar name, but I won't know until I try.
                    </p>
                    <br>
                </div>
            </article>
        </div>
        
        <div class="container-description-center">
            <article> 
                <img class="img-center" src="/src/assets/images/lightbulbpixel_icon.jpg">
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">Commitment Statement</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;;"> 
                        I commit to continue exploring technology as it advances, understanding it's complexity and find to use it in everyday life. 
                        Maintaining the balance between working and having fun as gaming will never be a thing that I'll get tired of.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Know my weaknesses and find workarounds to make things work. 
                        Think outside the box when things really get difficult to deal with. 
                        Apply what I've learned in College in real life scenarios that may occur through my life from here on out. 
                        Know when to stop or keep going as time moves forward. Every decision I make is more or less final and cannot be reversed. 
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Take chances or opportunities in life when they appear as they are limited and never show up even again. 
                        And finally, live life to the fullest, do the things I need to do and also do the things I want, which is gaming.
                        One day I will be online in-game for the very last time, but that time is not now, not yet.
                    </p>
                    <br>
                </div>
            </article>
        </div>
    </main>
</template>