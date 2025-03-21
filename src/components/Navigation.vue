<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="nav" style="font-family: DePixelHalbfett; font-size: 12px; color: black;">
    <ul>
        <img class="img-logo" src="/src/assets/images/LimRyan_Portfolio_Logo_Inverted.png" alt="Logo">
        <p class="nav-title">RML Digital Portfolio</p>
        <span>\</span>
        <RouterLink to="/"><li> Home </li></RouterLink>
        <span>\</span>
        <RouterLink to="/About"><li> About </li></RouterLink>
        <span>\</span>
    </ul>
  </nav>
</template>