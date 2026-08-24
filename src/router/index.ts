import type { RouteRecordRaw } from 'vue-router'
import { allCards } from '@/data'

/** Renders nothing — the /cards index state, with no card overlay open. */
const NoOverlay = { render: () => null }

/**
 * Card detail is a CHILD of /cards, which is what makes "enlarge in place"
 * and real prerendered URLs the same thing: the gallery stays mounted and
 * renders the overlay in its <router-view>, while a direct visit to
 * /cards/VS00-001 still produces a full HTML page containing the card text.
 *
 * These are generated as static paths (not /cards/:id) so vite-ssg picks up
 * every card automatically without an includedRoutes hook in vite.config.
 */
const cardRoutes: RouteRecordRaw[] = allCards.map((card) => ({
  path: card.id,
  name: `card-${card.id}`,
  component: () => import('@/views/CardDetailView.vue'),
  props: { id: card.id },
}))

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  {
    path: '/cards',
    component: () => import('@/views/CardsView.vue'),
    children: [{ path: '', name: 'cards', component: NoOverlay }, ...cardRoutes],
  },
  { path: '/sets', name: 'sets', component: () => import('@/views/SetsView.vue') },
  { path: '/rules', name: 'rules', component: () => import('@/views/RulesView.vue') },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]
