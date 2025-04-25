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
                        Hi, name's <span style="color:greenyellow">Ryan Lim</span>. 
                        A graduate from the course of BS-IS also known as Bachelor of Science Major in Information Systems in De La Salle College of St. Benilde. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I've had experience in coding in the following programming languages such as C<span style="font-family: Smallest Pixel-7; font-size: 20px;">#</span>, JavaScript, 
                        and more recent ones like TypeScript, and NextJS ever since my group's thesis. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I try to balance both productivity and gaming. 
                        As it helps me not only be productive but also have fun from time to time.
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
                        I've had an interest in technology, most especially computers when I was younger. 
                        How they are used for everyday activities and how they're capable of providing you both productivity and entertainment. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        This is why my course was Information Systems. 
                        With coding being done as well, it shows me what intricacies are hidden from the user that allow the system to work in such ways fascinates me. 
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
                        Apart from making games myself, I also like gaming quite a bit.
                        Some notable mentions are games like Minecraft, Terraria, GTAV, 
                        and more recently I've came back to, Warframe.  
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
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
    </main>
</template>