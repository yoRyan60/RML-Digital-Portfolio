import { createWebHistory, createRouter } from "vue-router";
//Or use createMemoryHistory for Node.js and SSL or if you don't want the path to show on the search bar.

import Home from "./components/Home.vue";
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import AcademicWork from "./components/AcademicWork.vue";
import InternshipLearning from "./components/InternshipLearning.vue";
import ReflectionsOnCollege from "./components/ReflectionsOnCollege.vue";
import Feedback from "./components/Feedback.vue";

const routes = [
    { path: '/', component: Home},
    { path: '/Introduction', component: Introduction},
    { path: '/About', component: About},
    { path: '/AcademicWork', component: AcademicWork},
    { path: '/InternshipLearning', component: InternshipLearning},
    { path: '/ReflectionsOnCollege', component: ReflectionsOnCollege},
    { path: '/Feedback', component: Feedback}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router