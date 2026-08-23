<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { getCard } from '@/data'
import CardDetail from '@/components/CardDetail.vue'

const props = defineProps<{ id: string }>()
const router = useRouter()

const card = computed(() => getCard(props.id))

function close() {
  router.push('/cards')
}

// Prerendered into each card's HTML, so shared links get real previews.
useHead(
  computed(() => {
    const c = card.value
    if (!c) return { title: 'Card not found — VStage' }
    const skills = c.skills.map((s) => s.name).join(', ')
    return {
      title: `${c.name} (${c.id}) — VStage`,
      meta: [
        {
          name: 'description',
          content: `${c.name} — ${c.rarity}, ${c.maxHp} HP. Skills: ${skills}.`,
        },
        { property: 'og:title', content: `${c.name} — VStage` },
        { property: 'og:description', content: `${c.rarity} · ${c.maxHp} HP · ${skills}` },
      ],
    }
  }),
)

// Browser-only: guarded in onMounted so the static build never touches window.
function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="vs-overlay" role="dialog" aria-modal="true" :aria-label="card?.name ?? 'Card'">
    <!-- Backdrop click closes; clicks inside the panel must not bubble out. -->
    <div class="vs-overlay__backdrop position-fixed top-0 start-0 w-100 h-100" @click="close"></div>

    <div class="vs-overlay__panel position-relative p-3 p-md-4">
      <button
        type="button"
        class="btn-close float-end"
        aria-label="Close"
        @click="close"
      ></button>

      <CardDetail v-if="card" :card="card" />
      <div v-else class="py-5 text-center">
        <h1 class="h4">Card not found</h1>
        <p class="text-body-secondary">No card with id <code>{{ id }}</code>.</p>
        <RouterLink class="btn btn-primary" to="/cards">Back to gallery</RouterLink>
      </div>
    </div>
  </div>
</template>
