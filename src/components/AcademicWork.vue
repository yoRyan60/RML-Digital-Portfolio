<script>
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0,0);
        },
        gotoHome(){
            this.scrollToTop();
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
                        What I mainly did on the website was the Statistics part, 
                        where I’d translate the data on our database to a visually appealing graph to make it easier for the user to interpret.
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
                        Here's some screenshots of said statistics displaying their respective data:
                    </p>
                </div>
            </article>
        </div>
        <div>
            <article class="imagecontainer">
                <img src="/src/assets/images/AcademicWork_images/statistics1.jpg" alt="statistic image 1">
                <img src="/src/assets/images/AcademicWork_images/statistics2.jpg" alt="statistic image 2">
                <img src="/src/assets/images/AcademicWork_images/statistics3.jpg" alt="statistic image 3">
                <img src="/src/assets/images/AcademicWork_images/statistics4.jpg" alt="statistic image 4">
                <img src="/src/assets/images/AcademicWork_images/statistics5.jpg" alt="statistic image 5">
                <img src="/src/assets/images/AcademicWork_images/statistics9.jpg" alt="statistic image 9">
                <img src="/src/assets/images/AcademicWork_images/statistics7.jpg" alt="statistic image 7">
                <img src="/src/assets/images/AcademicWork_images/statistics8.jpg" alt="statistic image 8">
                <img src="/src/assets/images/AcademicWork_images/statistics6.jpg" alt="statistic image 6">
            </article>
        </div>
        <div class="container-description-left">
            <article> 
                <img class="img-right" src="/src/assets/images/GenericSpaceShooter_Title.png">
                <h2 class="container-description-header">Previous Final Project - Making a Game</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Generic Space Shooter was a project made around my 2nd term in 1st year college. 
                        We needed to make a game with the use of an IDE called Visual Studio, which uses the C<span style="font-family: Smallest Pixel-7; font-size: 20px;">#</span> programming language.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The project itself was called Object-Oriented Programming (OOP).                      
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The gameplay was pretty straightforward. You got 3 lives, use WASD to move, and the spacebar to shoot. 
                        Then a simple scoring system as a mechanic to keep track of how long you've survived.
                    </p>
                    <br>
                </div>
                <div class="genericspaceshooterimages" style="justify-self: center">
                    <img class="img-left" src="/src/assets/images/GenericSpaceShooter (GIF-1).gif" style="width: 350px;">
                    <img class="img-left" src="/src/assets/images/GenericSpaceShooter (GIF-2).gif" style="width: 350px;">
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