<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ socials: string[] }>()

function getTwitterImageURL() {
  return new URL(`../assets/socmed_logos/twitter.png`, import.meta.url).href;
}

function getBlueskyImageURL() {
  return new URL(`../assets/socmed_logos/bluesky.png`, import.meta.url).href;
}


const sortedSocials = computed(() => {
  return props.socials.sort((a, b) => a.localeCompare(b))
})

function socialToURL(social: string) {
    const host = new URL(social).hostname
    let img;
    switch (host) {
        case 'bsky.app': img = 'bluesky'; break
        case 'www.twitch.tv': img = 'twitch'; break
        case 'www.youtube.com': img = 'youtube'; break
        case 'www.tiktok.com': img = 'tiktok'; break
        case 'www.instagram.com': img = 'instagram'; break
        default: img = 'twitter'; break
    }
    return new URL(`../assets/socmed_logos/${img}.png`, import.meta.url).href;
}
</script>

<template>
    <div v-for="social in sortedSocials">
        <a :href="social" target="_blank" rel="noopener noreferrer">
            <img :src="socialToURL(social)" alt="Social" style="width: 20px; height: 20px;"/>
        </a>
    </div>
</template>