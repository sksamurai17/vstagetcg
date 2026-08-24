/**
 * VStage domain model.
 *
 * Two shapes deliberately encode "same card, printed twice":
 *  - BaseCard holds the full definition (name, hp, skills).
 *  - Reprint holds ONLY what an overnumbered printing may change
 *    (number, rarity, art) and points at its base card.
 *
 * Because Reprint has no `skills` field at all, it is impossible to
 * write a reprint whose skill text has drifted from its base card.
 */

export type RarityType = 'common' | 'uncommon' | 'rare' | 'ultra-rare'

/** Ascending order — also the canonical sort order for rarity. */
export const RARITIES = [
  'common',
  'uncommon',
  'rare',
  'ultra-rare',
] as const satisfies readonly RarityType[]

export const RARITY_LABELS: Record<RarityType, string> = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  'ultra-rare': 'Ultra Rare',
}

/** Active skills cost resources; passive and reactive skills cannot. */
export type Skill =
  | { type: 'passive'; name: string; description: string }
  | { type: 'reaction'; name: string; description: string }
  | { type: 'active'; name: string; description: string; cost: number }

type TokenBase = {
  id: string
  name: string
}

/** Summon tokens sit on the stage and can be attacked. */
export type SummonToken = TokenBase & { kind: 'summon'; maxHp: number; dmgOutput: number }

/** Stage Effect tokens apply a passive (or reactive) effect for a fixed number of turns. */
export type StageEffectToken = TokenBase & { kind: 'stage-effect'; duration: number; effectOutput: string }

export type Token = SummonToken | StageEffectToken

export type BaseCard = {
  setId: string
  number: number
  name: string
  rarity: RarityType
  maxHp: number
  skills: Skill[]
  image: string
  /** Illustrator credit, as printed on the card. */
  artist: string
  /** Tokens this card can put onto the stage. */
  tokenIds?: string[]
}

/** An overnumbered reprint (e.g. 41/40) of a card in the same set. */
export type Reprint = {
  setId: string
  number: number
  rarity: RarityType
  /** A reprint always carries its own art — that is most of the point of one. */
  image: string
  /** Different art can mean a different illustrator, so this is not inherited. */
  artist: string
  baseCardId: string
}

export type Card = BaseCard | Reprint

export type CardSet = {
  id: string
  name: string
  /** Declared set size. Overnumbered cards intentionally exceed this. */
  totalCards: number
  description?: string
}

/** A reprint merged with its base card — what every component consumes. */
export type ResolvedCard = {
  id: string
  setId: string
  number: number
  name: string
  rarity: RarityType
  maxHp: number
  skills: Skill[]
  image: string
  artist: string
  tokenIds: string[]
  isReprint: boolean
  baseCardId?: string
}

export function isReprint(card: Card): card is Reprint {
  return 'baseCardId' in card
}

/** Stable URL id, zero-padded so routes sort predictably: VS00-041. */
export function cardId(setId: string, number: number): string {
  return `${setId}-${String(number).padStart(3, '0')}`
}

/** Collector number as shown on the card: 41/40, or 014/072. */
export function collectorNumber(number: number, totalCards: number): string {
  return `${String(number).padStart(String(totalCards).length, '0')}/${totalCards}`
}
