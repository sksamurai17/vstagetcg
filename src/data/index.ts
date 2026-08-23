import {
  cardId,
  isReprint,
  type Card,
  type CardSet,
  type ResolvedCard,
  type Token,
} from '@/types/card'
import { cards } from './cards'
import { sets } from './sets'
import { tokens } from './tokens'

export { cards, sets, tokens }

const setsById = new Map<string, CardSet>(sets.map((s) => [s.id, s]))
const tokensById = new Map<string, Token>(tokens.map((t) => [t.id, t]))

/** Base cards only, keyed by id — the targets a reprint may point at. */
const baseCardsById = new Map<string, Card>(
  cards.filter((c) => !isReprint(c)).map((c) => [cardId(c.setId, c.number), c]),
)

function resolve(card: Card): ResolvedCard {
  const id = cardId(card.setId, card.number)

  if (!isReprint(card)) {
    return { ...card, id, tokenIds: card.tokenIds ?? [], isReprint: false }
  }

  const base = baseCardsById.get(card.baseCardId)
  if (!base || isReprint(base)) {
    throw new Error(`Card ${id} references unknown base card "${card.baseCardId}"`)
  }

  return {
    id,
    setId: card.setId,
    number: card.number,
    // Identity and rules come from the base card...
    name: base.name,
    maxHp: base.maxHp,
    skills: base.skills,
    tokenIds: base.tokenIds ?? [],
    // ...while rarity, art and its credit belong to this printing.
    rarity: card.rarity,
    image: card.image,
    artist: card.artist,
    isReprint: true,
    baseCardId: card.baseCardId,
  }
}

/** Every card, reprints merged, sorted by set then collector number. */
export const allCards: ResolvedCard[] = cards
  .map(resolve)
  .sort((a, b) => a.setId.localeCompare(b.setId) || a.number - b.number)

const cardsById = new Map<string, ResolvedCard>(allCards.map((c) => [c.id, c]))

export function getCard(id: string): ResolvedCard | undefined {
  return cardsById.get(id)
}

export function getSet(id: string): CardSet | undefined {
  return setsById.get(id)
}

export function getToken(id: string): Token | undefined {
  return tokensById.get(id)
}

export function getTokensFor(card: ResolvedCard): Token[] {
  return card.tokenIds.map(getToken).filter((t): t is Token => t !== undefined)
}

export function cardsInSet(setId: string): ResolvedCard[] {
  return allCards.filter((c) => c.setId === setId)
}

// --- Development-time integrity checks -------------------------------------
// Overnumbered cards exceeding a set's declared total is expected, so that is
// not an error. Duplicate numbers and dangling references are.
if (import.meta.env.DEV) {
  const seen = new Set<string>()
  for (const card of allCards) {
    if (seen.has(card.id)) console.warn(`[data] duplicate card number: ${card.id}`)
    seen.add(card.id)

    if (!setsById.has(card.setId)) console.warn(`[data] ${card.id} is in unknown set "${card.setId}"`)

    for (const tokenId of card.tokenIds) {
      if (!tokensById.has(tokenId)) console.warn(`[data] ${card.id} references unknown token "${tokenId}"`)
    }
  }
}
