<script>
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0,0);
        },
        gotoIntroduction(){
            this.scrollToTop();
            this.$router.push('/Introduction')
        },
        gotoAbout(){
            this.scrollToTop();
            this.$router.push('/About')
        },
        gotoMyResume(){
            this.scrollToTop();
            this.$router.push('/MyResume')
        },
        gotoAcademicWork(){
            this.scrollToTop();
            this.$router.push('/AcademicWork')
        },
        gotoInternshipLearning(){
            this.scrollToTop();
            this.$router.push('/InternshipLearning')
        },
        gotoReflectionsOnCollege(){
            this.scrollToTop();
            this.$router.push('/ReflectionsOnCollege')
        },
        gotoFeedback(){
            this.scrollToTop();
            this.$router.push('/Feedback')
        },
    },  
}
</script>

<template>
    <header style="text-align: center; padding-top: 50px;">
        <div class="container">
            <p class="typewritter-effect" style="font-family: DePixelHalbfett; color: white;">Hello there. It's me, Ryan.</p>
        </div>
        <div class="home-container-description">
            <p style="font-family: Smallest Pixel-7; color: white;">Take a look around my portfolio by clicking on the corresponding options.</p>
        </div>
    </header>
    <main class="grid-container" style="font-family: Retro Computer; color: white;">
        <button @click="gotoIntroduction" style="all: unset;">
            <article class="home-text">
                <h1><span class="selector">>> </span> Introduction</h1>
                    <p class="extra-text">Is where I introduce myself and talk about my life experiences.</p>
            </article>
        </button>
        <button @click="gotoAbout" style="all: unset;">
            <article class="home-text">
                <h1><span class="selector">>> </span> About</h1>
                    <p class="extra-text">Here you can know some things about this website/portfolio.</p>
            </article>
        </button>
        <button @click="gotoAcademicWork" style="all: unset;">
            <article class="home-text">
                <h1><span class="selector">>> </span> Academic Work</h1>
                    <p class="extra-text">Things that I'm proud of making or contributing to in my time in college.</p>
            </article>
        </button>
        <button @click="gotoInternshipLearning" style="all: unset;">
            <article class="home-text">
                <h1><span class="selector">>> </span> Internship Learning</h1>
                    <p class="extra-text">Things I've learned from OJT, as well showing some of the tasks that I did.</p>
            </article>
        </button>
        <button @click="gotoReflectionsOnCollege" style="all: unset;">
            <article class="home-text">
                <h1><span class="selector">>> </span> Reflections on College</h1>
                    <p class="extra-text">What to do next once I finish college, my lifelong goals.</p>
            </article>
        </button>
        <article @click="gotoFeedback" class="home-text">
            <h1><span class="selector">>> </span> Feedback</h1>
                <p class="extra-text">Wanna leave a comment? Click here to fill out a form.</p>
        </article>
        <!--This last option is supposedly centered in the grid, putting a button tag around it removes that centering which I can't prevent atm.-->
    </main>
</template>