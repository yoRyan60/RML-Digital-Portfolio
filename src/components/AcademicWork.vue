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
            <h1 style="font-family: Retro Computer; color:greenyellow">Academic Work</h1>
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
                <img class="img-left" src="/src/assets/images/GiveMore_Logo.png" style="width: 350px">
                <h2 class="container-description-header">Capstone - GiveMore</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Back in college, I've worked with a group for capstone. 
                        Long story short, it's a website called GiveMore. A donation platform and record-keeping system for charities.
                        It's made with the following, NextJS, React, TypeScript, Tailwind CSS, and Node.js. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Though like most capstones it obviously is not fully functional, most especially the payment part as we don't have much permissions to make it actual work, since we'd need to be a real business, but we're just students so that's a no. 
                        But apart from that the website works well.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        You can check out the website here:
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: greenyellow; font-size: 12px; font-style: italic; text-decoration: underline;"> 
                        <a href="https://isproj2.vercel.app/" target="_blank">GiveMore - Give to each other to make the world better.</a>
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-center">
            <article> 
                <h2 class="container-description-header">What I've done in my group's Capstone</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        What I mainly did in out website was the Statistics part, where it shows things like, total cash donations, in-kind donations, etc. 
                        There's things like Yearly, Monthly, Daily, and Custom filters allowing the user to display data based on the given parameters. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The data here is obtained from our database and is then displayed here.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Also all of this was possible thanks to ReCharts, the library I used to create these charts containing data from out database. Check their stuff out in the link below:
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: greenyellow; font-size: 12px; font-style: italic; text-decoration: underline;"> 
                        <a href="https://recharts.org/en-US/" target="_blank">ReCharts</a>
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Here's some screeshots of said statistics displaying their respective data:
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: greenyellow; font-size: 12px; font-style: italic;"> 
                        Click the dots on the slider to view the images.
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-center">
            <section class="slider-container">
                <div class="slider-wrapper">
                    <div class="slider">
                        <img id="slide-1" src="/src/assets/images/AcademicWork_images/statistics1.jpg" alt="statistic image 1">
                        <img id="slide-2" src="/src/assets/images/AcademicWork_images/statistics2.jpg" alt="statistic image 2">
                        <img id="slide-3" src="/src/assets/images/AcademicWork_images/statistics3.jpg" alt="statistic image 3">
                        <img id="slide-4" src="/src/assets/images/AcademicWork_images/statistics4.jpg" alt="statistic image 4">
                        <img id="slide-5" src="/src/assets/images/AcademicWork_images/statistics5.jpg" alt="statistic image 5">
                        <img id="slide-6" src="/src/assets/images/AcademicWork_images/statistics6.jpg" style="scale:24.5%" alt="statistic image 6">
                        <img id="slide-7" src="/src/assets/images/AcademicWork_images/statistics7.jpg" alt="statistic image 7">
                        <img id="slide-8" src="/src/assets/images/AcademicWork_images/statistics8.jpg" alt="statistic image 8">
                        <img id="slide-9" src="/src/assets/images/AcademicWork_images/statistics9.jpg" alt="statistic image 9">
                    </div>
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                        <a href="#slide-6"></a>
                        <a href="#slide-7"></a>
                        <a href="#slide-8"></a>
                        <a href="#slide-9"></a>
                    </div>
                 </div>
            </section>
        </div>
        <div class="container-description-left">
            <article> 
                <img class="img-right" src="/src/assets/images/GenericSpaceShooter_Title.png">
                <h2 class="container-description-header">Previous Final Project - Making a Game</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Generic Space Shooter was a project made around my 2nd term in 1st year college. 
                        The subject was called FUNPROG (Fundamental Programming). 
                        And our professor decided that the final project would be to make a game with the use of an IDE called Visual Studio, which uses the C# programming language.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The project itself was called Object-Oriented Programming (OOP). 
                        Now I may be a gamer, but I've never actually made a game. Unless, you count one that I made before using Scratch.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The gameplay was pretty straightforward. You got 3 lives, use WASD to move, and the spacebar to shoot. 
                        You get points for destroying enemies. Destroy as many enemies as you can as they'll endlessly spawn.
                        As the score goes up, enemies move and shoot faster, there's a limit to how fast they can be.
                        And the highest score is saved.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I have revisited this game recently and decided to rewrite it but this time in Unity. 
                        Not that it's better there but it will streamline the experience of making it since it'll be in an actual game engine. 
                        So I guess...stay tuned?
                    </p>
                    <br>
                </div>
                <div style="justify-self: center;">
                    <img class="img-left" src="/src/assets/images/GenericSpaceShooter (GIF-1).gif" style="width: 350px;">
                    <img class="img-left" src="/src/assets/images/GenericSpaceShooter (GIF-2).gif" style="width: 350px;">
                </div>
            </article>
        </div>
    </main>
</template>