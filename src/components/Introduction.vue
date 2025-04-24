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
            <h1 style="font-family: Retro Computer; color:greenyellow">Introduction</h1>
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
                <img class="img-left" src="/src/assets/images/RayanLem.png">
                <h2 class="container-description-header">About Me</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Hello, my name is <span style="color:greenyellow">Ryan Lim</span>. 
                        A graduate from the course of BS-IS also known as Bachelor of Science Major in Information Systems in De La Salle College of St. Benilde. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I've had experience in coding in the following programming languages such as C<span style="font-family: Smallest Pixel-7; font-size: 20px;">#</span>, JavaScript, 
                        and more recent ones like TypeScript, and NextJS ever since my group's thesis. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I try to balance both productivity and gaming, well, I try anyway since sometimes one goes over the other.
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-right">
            <article> 
                <img class="img-right" src="/src/assets/images/computer_icon.png">
                <h2 class="container-description-header">Interests</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Ever since I was young, I had an interest in technology, most especially computers. 
                        How they are used for everyday activities and how they're capable of providing you both productivity and entertainment at the same time. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Though I never really gotten hooked up with one until much later in my life, 
                        I got to experience old phones, the old school ones, 
                        then eventually having my own modern devices like a smartphone and laptop as of today. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        This is why my course was Information Systems. 
                        With a lot of coding being done as well, it shows me what intricacies are hidden from the user that allow the system to work in such ways fascinates me, like how a website can make unique transitions, redirect you to other pages, or even simple hyperlinks. 
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-left">
            <article> 
                <img class="img-left" src="/src/assets/images/game_controller_pixel_icon.png">
                <h2 class="container-description-header">Hobbies</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Same with my interest in technology is how much I also liked gaming a lot. Back then it's games on a Gameboy, Nintendo DS, then nowadays on a PC. 
                        This is what I usually do a lot on a daily basis.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        However it became a bit less often ever since my journey in college due to many requirements and big projects. 
                        Especially thesis where weekends were my only time to play, worse case I had to work on weekends as well due to the many things needed for academic and stuff. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        But apart from that once everything subsides, I get to open a few games I usually play a lot. 
                        Games like Minecraft, Terraria, GTAV, and more recently I've came back to, Warframe.  
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        If you're interested, you can check these games out by clicking on one of the options below;
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        <a class="minecraft" href="https://www.minecraft.net/en-us" target="_blank">Minecraft</a>
                        <span> \ </span> 
                        <a class="terraria" href="https://terraria.org/" target="_blank">Terraria</a> 
                        <span> \ </span> 
                        <a  class="gtav" href="https://www.rockstargames.com/gta-v" target="_blank">GTAV</a>
                        <span> \ </span> 
                        <a  class="warframe" href="https://www.warframe.com/" target="_blank">Warframe</a>
                    </p>
                </div>
            </article>
        </div>
    </main>
</template>