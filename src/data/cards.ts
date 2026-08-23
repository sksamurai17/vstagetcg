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
    setId: 'vs01',
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
    setId: 'vs01',
    number: 2,
    image: sampleArt,
    artist: 'SketchSamurai',
    name: 'Vtuber B',
    rarity: 'rare',
    maxHp: 12,
    tokenIds: ['tok-stage-lights', 'tok-clipper'],
    skills: [
      {
        type: 'active',
        name: 'Debut Showcase',
        cost: 3,
        description: 'Place Stage Lights on the field, then summon one Clipper token.',
      },
      {
        type: 'passive',
        name: 'Veteran Presence',
        description: 'Vtuber B takes 1 less damage from Common and Uncommon characters.',
      },
    ],
  },
  {
    setId: 'vs01',
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
    setId: 'vs01',
    number: 4,
    image: sampleArt,
    artist: 'SketchSamurai',
    name: 'Vtuber D',
    rarity: 'ultra-rare',
    maxHp: 14,
    tokenIds: ['tok-raid'],
    skills: [
      {
        type: 'active',
        name: 'Collab Stream',
        cost: 4,
        description:
          'Choose another character you control. Until end of turn, it may use one of ' +
          "Vtuber D's active skills without paying its cost.",
      },
      {
        type: 'active',
        name: 'Raid Out',
        cost: 2,
        description: 'Place Incoming Raid on the field and draw two cards.',
      },
      {
        type: 'passive',
        name: 'Algorithm Favourite',
        description: 'Vtuber D cannot be targeted by skills while you control a field token.',
      },
    ],
  },
  // Overnumbered secret print of Vtuber B: 41/40.
  // No name, HP or skills here — those resolve from vs01-002 at read time.
  {
    setId: 'vs01',
    number: 41,
    image: sampleArt,
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'vs01-002',
  },
]
