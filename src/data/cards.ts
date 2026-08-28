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
    image: 'Clovoire',
    handle: 'clovoire',
    artist: 'SketchSamurai',
    name: 'Clovoire',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'active',
        name: 'Banished to PEC',
        cost: 2,
        description: 'Deal 1d3 DMG to an enemy. This enemy cannot take action on your opponent\'s next turn.'
      },
      {
        type: 'active',
        name: 'Gonna Do Something Dangerous',
        cost: 4,
        description: 'Deal 1d3+2 DMG to all enemy characters. If this results in a KO, deal 1 additional DMG to an enemy.',
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
  {
    setId: 'VS00',
    number: 6,
    image: 'JoetheJoe',
    handle: 'JoetheJoe9',
    artist: 'SketchSamurai',
    name: 'JoetheJoe',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: 'Line Dodge',
        description:
          'This character has a 50% chance of dodging incoming attacks from enemy characters.'
      },
      {
        type: 'active',
        name: 'Halftone Drop Zone',
        cost: 3,
        description: 'Deal 1d3+2 DMG to all enemies.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 10,
    image: 'Nyxie',
    handle: 'nyxiena',
    artist: 'SketchSamurai',
    name: 'Nyxie',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'active',
        name: 'Holy Thighble',
        cost: 2,
        description:
          'Restore 1d3+1 HP to an ally character.'
      },
      {
        type: 'active',
        name: 'VTuber Physics Are Real (And Can Hurt You)',
        cost: 4,
        description: 'Deal 1d3+2 DMG to all enemies. If there were any enemy summons on the field,' +
        'deal 1 additional DMG to an enemy.',
      },
    ],
  },
  {
    setId: 'VS00',
    number: 30,
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
        name: 'Art Tax',
        cost: 1,
        description:
          'Deal 1 DMG to an enemy and discard 1 of your opponent\'s resources.' +
          'If their stock is empty, deal 1d3+1 DMG to an enemy.'
      },
      {
        type: 'active',
        name: 'The Bonds We Share',
        cost: 4,
        description: 'Restore 2d3 HP to all ally characters, and deploy a  [+1] «Fu\'s Spirit Lake» for 3 turns.',
      },
    ],
  },
  // Overnumbered secret prints.
  // No name, HP or skills here, those get resolved at read time
  {
    setId: 'VS00',
    number: 41,
    image: 'GenieFullArt',
    artist: 'SketchSamurai',
    rarity: 'rare',
    baseCardId: 'VS00-002',
  },
  {
    setId: 'VS00',
    number: 44,
    image: 'NyxieFullArt',
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'VS00-010',
  },
]
