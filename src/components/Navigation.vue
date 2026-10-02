<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="nav" style="font-family: Retro Computer; font-size: 20px; color: black;">
    <ul>
        <img class="RML-Digital-Portfolio_logo" src="/src/assets/images/LimRyan_Portfolio_Logo_Inverted.png" alt="Logo">
        <p>RML Digital Portfolio</p>
        <RouterLink to="/"><li>[Home]</li></RouterLink>
        <RouterLink to="/Portfolio"><li>[Portfolio]</li></RouterLink>
        <RouterLink to="/About"><li>[About]</li></RouterLink>
    </ul>
  </nav>
</template>