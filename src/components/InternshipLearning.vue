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
                <img class="img-left" src="/src/assets/images/InternshipLearning_images/dona_alejandra_inc_logo.jpg" style="width: 350px">
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">OJT - On the Job Traning</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        So at this time I have applied for internship (OJT) for a company called Doña Alejandra Incorporated (also known as DAI). 
                        And the position I'm in was Quality Assurance Intern (QA), whose job is in short, to perform tests on a system via the use of a test plan.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        A bit of background on the company; 
                        In the rapidly changing field of document management, 
                        DAI has established the gold standard by providing the most dependable, 
                        feature-rich, affordable, and user-friendly solutions. 
                        Above all, it possesses the easy-to-use and efficient functionalities of the five main document management components: capture, storage, manage, collaborate, and accessibility. 
                        Additionally, it is capable of being integrated to increase efficacy with external business applications.
                    </p>
                    <br>
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
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
                <h2 style="font-family: Smallest Pixel-7; color: greenyellow; font-size: 30px;">Tasks/Outputs done for OJT</h2>
                <div class="text-wrapper">
                    <p style="font-family: DePixelHalbfett; color: white; font-size: 12px;"> 
                        Here's the tasks I've done for the company. 
                        Mainly being test plans, and on the side I've also made findings I've discovered while testing the system.
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
                        <img id="slide-1" src="/src/assets/images/InternshipLearning_images/regressiontest1.jpg" alt="regression test plan 1">
                        <img id="slide-2" src="/src/assets/images/InternshipLearning_images/regressiontest2.jpg" alt="regression test plan 2">
                        <img id="slide-3" src="/src/assets/images/InternshipLearning_images/regressiontest3.jpg" alt="regression test plan 3">
                        <img id="slide-4" src="/src/assets/images/InternshipLearning_images/regressiontest4.jpg" alt="regression test plan 4">
                        <img id="slide-5" src="/src/assets/images/InternshipLearning_images/regressiontest5.jpg" alt="regression test plan (showstoppers) 5">
                        <img id="slide-6" src="/src/assets/images/InternshipLearning_images/regressiontest6.jpg" alt="regression test plan (showstoppers) 6">
                    </div>
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                        <a href="#slide-6"></a>
                    </div>
                 </div>
            </section>
        </div>
    </main>
</template>