<script setup>
import Navigation from './components/Navigation.vue';
</script>

<script>
    var currentYear = Document.write = new Date().getFullYear()
</script>


<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <Navigation/>
  <div class="footer-container">
    <main>
      <RouterView/>
    </main>
    <footer class="footer" style="font-family: Smallest Pixel-7;">
          Copyright © {{ currentYear }} RML. All rights reserved.
          <a href="https://github.com/yoRyan60" target="_blank">
            <img src="/src/assets/images/GitHub_logo.png" class="footer-link-GitHub"> 
          </a>
    </footer>
  </div>
</template>
