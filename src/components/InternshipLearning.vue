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
            <h1 style="font-family: Retro Computer; color:greenyellow">Internship Learning</h1>
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
                <img class="img-center" src="/src/assets/images/InternshipLearning_images/dona_alejandra_inc_logo.jpg" style="width: 350px;">
                <h2 class="container-description-header">OJT - On the Job Traning</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        So at this time I have applied for internship (OJT) for a company called Doña Alejandra Incorporated. 
                        The position I'm in was Quality Assurance Intern (QA), and my job was to perform tests on a system via the use of a test plan.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Go check them out here:
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: orange; font-size: 12px; font-style: italic; text-decoration: underline;"> 
                        <a href="https://dai.global-intelligent-solutions.com/" target="_blank">Doña Alejandra Incorporated </a>
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description-center">
            <article> 
                <h2 class="container-description-header">Tasks Done during OJT</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        I mainly did things like regression tests plans where you'd simply test parts of the system and check if they doing what they're suppose to.
                        Another regression test plan to list all the showstoppers, meaning if said function causes the system to view an error which disrupts user experience.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        As proof that I've completed my OJT at this company, there's a image of the certificate below:
                    </p>
                    <br>
                    <img class="img-center" style="width: 70%;" src="/src/assets/images/InternshipLearning_images/OJT_certificate.jpg">
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