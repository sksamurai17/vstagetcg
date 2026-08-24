import type { Card } from '@/types/card'

// Shared placeholder art. Swap per card as real art arrives: add another
// `import x from '@/assets/cards/x.jpg'` and point that card's `image` at it.
import sampleArt from '@/assets/cards/sample-art.jpg'

/**
 * Hand-authored card data. The compiler is the schema check here:
 * a malformed card fails `npm run type-check`, not at runtime.
 */
export const cards: Card[] = [
  {
    setId: 'VS00',
    number: 1,
    image: sampleArt,
    artist: 'SketchSamurai',
    name: 'Vtuber A',
    rarity: 'uncommon',
    maxHp: 10,
    tokenIds: ['tok-superchat'],
    skills: [
      {
        type: 'passive',
        name: 'Chat Momentum',
        description: 'At the start of your turn, gain 1 resource for each token you control.',
      },
      {
        type: 'active',
        name: 'Call to Chat',
        cost: 2,
        description: 'Summon one Superchat token to your field.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 2,
    image: sampleArt,
    artist: 'SketchSamurai',
    name: 'Genie F. Art',
    rarity: 'common',
    maxHp: 10,
    tokenIds: ['tok-toeby'],
    skills: [
      {
        type: 'active',
        name: 'Glizzy Run',
        cost: 1,
        description: 'Restore 1d3+1 HP to an ally character.',
      },
      {
        type: 'active',
        name: 'Rip a Fart',
        cost: 3,
        description: 'Deal 1d3 DMG to all enemies, and summon a [1/2] «Toeby» (max. 2).',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 3,
    image: sampleArt,
    artist: 'SketchSamurai',
    name: 'Vtuber C',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: 'Steady Uploads',
        description: 'Vtuber C recovers 1 HP at the end of each of your turns.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 4,
    image: sampleArt,
    artist: 'SketchSamurai',
    name: 'Ameiro Jey',
    rarity: 'common',
    maxHp: 10,
    tokenIds: ['tok-kidokafe'],
    skills: [
      {
        type: 'reaction',
        name: 'Slightly Boba-Addicted',
        description:
          'This character takes 1 less DMG from incoming attacks.'
      },
      {
        type: 'active',
        name: 'Bobae Party!',
        cost: 4,
        description: 'Deal 1d3+1 DMG to all enemies, and deploy a [+1] «KidoKafé» for 3 turns.',
      },
    ],
  },
  // Overnumbered secret print of Vtuber B: 41/40.
  // No name, HP or skills here — those resolve from VS00-002 at read time.
  {
    setId: 'VS00',
    number: 41,
    image: sampleArt,
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'VS00-002',
  },
]
