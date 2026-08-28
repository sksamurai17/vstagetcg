<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// The navbar toggle is handled in Vue rather than by Bootstrap's JS bundle,
// so nothing here touches `window` during the static build.
const menuOpen = ref(false)

function getLogoImageURL() {
  return new URL(`./assets/VStageLogo.png`, import.meta.url).href;
}
</script>

<template>
  <nav class="navbar navbar-expand-md border-bottom sticky-top bg-body">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/" @click="menuOpen = false">
        <img :src="getLogoImageURL()" alt="VStage Logo" style="maxWidth: 60px;" loading="lazy" />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: menuOpen }">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/cards" @click="menuOpen = false">Card Gallery</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/sets" @click="menuOpen = false">Sets</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/lineup" @click="menuOpen = false">Lineup</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/rules" @click="menuOpen = false">Rules</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>

  <footer class="border-top mt-5 py-4">
    <div class="container text-body-secondary small">
      VStage card gallery — fan reference. Card data is placeholder.
    </div>
  </footer>
</template>
