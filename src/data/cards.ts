import { type Card, PassiveType } from '@/types/card'

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
    image: 'SketchSamurai',
    artist: 'SketchSamurai',
    name: 'SketchSamurai',
    handle: 'sksamurai17',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'The Art Grind Never Ends',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 2,
    image: 'Genie',
    artist: 'SketchSamurai',
    name: 'Genie F. Art',
    handle: 'genieart_',
    rarity: 'common',
    maxHp: 10,
    tokenIds: ['tok-toeby'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Rip a Fart',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [2/2] «Toeby» to any lane.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 3,
    image: 'Clovoire',
    handle: 'clovoire',
    artist: 'SketchSamurai',
    name: 'Clovoire',
    rarity: 'common',
    maxHp: 9,
    tokenIds: ['tok-dust-bunny'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Banished to PEC',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [1/3] «Monstar Pal» to any lane.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 4,
    image: 'Jey',
    handle: 'jey_vt',
    artist: 'SketchSamurai',
    name: 'Ameiro Jey',
    rarity: 'common',
    maxHp: 9,
    tokenIds: ['tok-kidokafe'],
    skills: [
      {
        type: 'active',
        name: 'Slightly Boba-Addicted',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target. \nBoost (+2): Deploy «KidoKafé».',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 5,
    image: 'HisuiCai',
    handle: 'Hisui_Cai',
    artist: 'SketchSamurai',
    name: 'Hisui Cai',
    rarity: 'uncommon',
    maxHp: 10,
    tokenIds: ['tok-fuspiritlake'],
    skills: [
      {
        type: 'active',
        name: 'Art Tax! Pay Up, Buddy',
        cost: 3,
        description: 'Discard [1] of your opponent\'s Hype and restore [2] HP to all ally characters (inclusive).\nBoost (+2): Deploy «Fu\'s Spirit Lake».',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 6,
    image: 'Deetz',
    handle: 'a12flames',
    artist: 'SketchSamurai',
    name: 'Deetz',
    rarity: 'common',
    maxHp: 9,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab,
        x_count: 2
      },
      {
        type: 'active',
        name: 'Blazing Fist',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 7,
    image: 'JoetheJoe',
    handle: 'JoetheJoe9',
    artist: 'SketchSamurai',
    name: 'JoetheJoe',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Halftone Drop Zone',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 9,
    image: 'Nyxie',
    handle: 'nyxiena',
    artist: 'SketchSamurai',
    name: 'Nyxie',
    rarity: 'common',
    maxHp: 9,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Holy Thighble',
        cost: 4,
        description:
          'Deal [1d6] DMG to an enemy target. If there are any enemy summons on the outer lanes, deal [1] additional DMG to this target.'
      },
    ],
  },
  // Overnumbered secret prints.
  // No name, HP or skills here, those get resolved at read time
  {
    setId: 'VS00',
    number: 37,
    image: 'GenieFullArt',
    artist: 'SketchSamurai',
    rarity: 'rare',
    baseCardId: 'VS00-002',
    handle: 'genieart_'
  },
  {
    setId: 'VS00',
    number: 40,
    image: 'NyxieFullArt',
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'VS00-009',
    handle: 'nyxiena'
  },
]
