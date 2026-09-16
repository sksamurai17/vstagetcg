<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ socials: string[] }>()

const sortedSocials = computed(() => {
  return props.socials.sort((a, b) => socialToName(a).localeCompare(socialToName(b)))
})

function socialToName(social: string): string {
    const host = new URL(social).hostname
    switch (true) {
        case /bsky\.app/.test(host): return 'bluesky'
        case /www\.twitch\.tv/.test(host): return 'twitch'
        case /www\.youtube\.com/.test(host): return 'youtube'
        case /www\.tiktok\.com/.test(host): return 'tiktok'
        case /www\.instagram\.com/.test(host): return 'instagram'
        case /vgen\.co/.test(host): return 'vgen'
        case /ko-fi\.com/.test(host): return 'kofi'
        case /www\.pixiv\.net/.test(host): return 'pixiv'
        case /.*\.bigcartel.com/.test(host): return 'bigcartel'
        case /.*\.etsy.com/.test(host): return 'etsy'
        default: return 'twitter'
    }
}

function socialToURL(social: string) {
    const img = socialToName(social)
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