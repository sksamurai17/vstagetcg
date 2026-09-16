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
    setId: 'AL00',
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
    setId: 'AL00',
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
    setId: 'AL00',
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
    setId: 'AL00',
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
    setId: 'AL00',
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
        description: 'Discard 1 of your opponent\'s Hype and restore 2 HP to all ally characters (inclusive).\nBoost (+2): Deploy «Fu\'s Spirit Lake».',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 6,
    image: 'Deetz',
    handle: 'A12FLAMES',
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
        name: 'Burning Fist',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
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
    setId: 'AL00',
    number: 8,
    image: 'WynnTerra',
    handle: 'WynnTerra_',
    artist: 'SketchSamurai',
    name: 'Wynn Terra',
    rarity: 'common',
    maxHp: 13,
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes
      },
      {
        type: 'active',
        name: 'Friend of the World',
        cost: 5,
        description: 'Restore [1d6] HP to all ally characters (inclusive). If there are any ally summons on the field, restore 1 additional HP to all ally characters (inclusive).',
      },
    ],
  },
  {
    setId: 'AL00',
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
  {
    setId: 'AL00',
    number: 10,
    image: 'CookieTea',
    handle: 'Cookie_Teaa',
    artist: 'SketchSamurai',
    name: 'Cookie Tea',
    rarity: 'common',
    maxHp: 13,
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes
      },
      {
        type: 'active',
        name: 'International Sprout',
        cost: 4,
        description: 'Restore [1d6] HP to all ally characters (inclusive), and optionally transfer 1 HP between any 2 allies.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 11,
    image: 'MakoSameshima',
    handle: 'MakoSameshima',
    artist: 'SketchSamurai',
    name: 'Mako Sameshima',
    rarity: 'common',
    maxHp: 10,
    tokenIds: ['tok-beach'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Queen of the Sharks',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [1/3] «Beach» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 12,
    image: 'FangGuu',
    handle: 'FangGuu',
    artist: 'SketchSamurai',
    name: 'Fang Guu',
    rarity: 'uncommon',
    maxHp: 9,
    tokenIds: ['tok-bonehead-isle'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Ooga Booga, Nice to Meat You!',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target.\n' +
        'Boost (+2): Deploy «Bonehead Isle».',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 13,
    image: 'MeiImori',
    handle: 'gekkomancer',
    artist: 'SketchSamurai',
    name: 'Mei Imori',
    rarity: 'common',
    maxHp: 11,
    skills: [
      {
        type: 'active',
        name: 'Can I Experiment On You?',
        cost: 3,
        description: 'At the start of your turn, flip two coins. If both heads, deal [1d6+3] DMG to an enemy target. Otherwise, all ally characters lose 1 HP.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 14,
    image: 'Noromin',
    handle: 'noromin_',
    artist: 'SketchSamurai',
    name: 'Noromin',
    rarity: 'common',
    maxHp: 8,
    tokenIds: ['tok-norowool'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Stinkymin',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [1/3] «Norowool» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 15,
    image: 'Azukitou',
    handle: 'AzukitouVT',
    artist: 'SketchSamurai',
    name: 'Azukitou',
    rarity: 'common',
    maxHp: 9,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Phoenix Flame',
        cost: 4,
        description: 'Deal [1d6] DMG to an enemy target. If any ally summons were knocked out on your opponent\'s last turn, restore 1 HP to all ally characters (inclusive).',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 16,
    image: 'HoshinoSae',
    handle: 'sae1627_',
    artist: 'SketchSamurai',
    name: 'Hoshino Sae',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Mugged Ya!',
        cost: 4,
        description: 'Deal [1d6] DMG to an enemy target, and shuffle a random card from your opponent\s hand back into their deck.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 17,
    image: 'AkioBlaze',
    handle: 'AkioBlaze',
    artist: 'SketchSamurai',
    name: 'AkioBlaze',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Professor of Color Theory',
        cost: 5,
        description: 'Deal [2d6] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 18,
    image: 'YoruhanaMai',
    handle: 'YoruhanaMai',
    artist: 'SketchSamurai',
    name: 'Yoruhana Mai',
    rarity: 'uncommon',
    maxHp: 12,
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes,
        x_count: 2
      },
      {
        type: 'active',
        name: 'Sip Some Tea',
        cost: 4,
        description: 'Restore [1d6] HP to all ally characters (inclusive).',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 19,
    image: 'ChiyongRira',
    handle: 'chiyongrira',
    artist: 'SketchSamurai',
    name: 'Chiyong Rira',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Shibari',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 20,
    image: 'SpellCraft',
    handle: 'spellydoesart',
    artist: 'SketchSamurai',
    name: 'Spell Craft',
    rarity: 'uncommon',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Take Your Vitamins!',
        cost: 5,
        description: 'Deal [1d6] DMG to an enemy target. If there are any ally summons on the field, restore 2 HP to all ally characters (inclusive).',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 21,
    image: 'SayuriKitsune',
    handle: 'SayuriKitsun',
    artist: 'SketchSamurai',
    name: 'SayuriKitsune',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Shortstack Fire',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and restore 2 HP to an ally character.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 22,
    image: 'KazziHino',
    handle: 'KazziHino',
    artist: 'SketchSamurai',
    name: 'Kazzi Hino',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Novaslash',
        cost: 4,
        description: 'Deal [1d6] DMG to an enemy target. If there are any ally summons on the field, deal 2 additional DMG to this target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 23,
    image: 'Hyuni',
    handle: 'hyunicat',
    artist: 'SketchSamurai',
    name: 'Hyuni',
    rarity: 'common',
    maxHp: 9,
    tokenIds: ['tok-hyunite'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab,
        x_count: 2
      },
      {
        type: 'active',
        name: 'Poop Log',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [1/3] «Hyunite» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 24,
    image: 'Kaeguri',
    handle: 'myfroggythighs',
    artist: 'SketchSamurai',
    name: 'Kaeguri',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Can\t End On a Loss',
        cost: 4,
        description: 'Deal [1d6] DMG to an enemy target. If any allies were knocked out on your opponent\'s last turn, deal 1 additional DMG to this target.'
      },
    ],
  },
  {
    setId: 'AL00',
    number: 25,
    image: 'Sakoneko',
    handle: 'sakoneko_',
    artist: 'SketchSamurai',
    name: 'Sakoneko',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Nekomata\'s Fortune?',
        cost: 4,
        description: 'Flip two coins. If both tails, deal [1d6+2] DMG to enemies in the outer lanes. Otherwise, deal 2 DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 26,
    image: 'Teafiee',
    handle: 'TeafieeCha',
    artist: 'SketchSamurai',
    name: 'Teafiee',
    rarity: 'common',
    maxHp: 12,
    tokenIds: ['tok-emerald-tea-leaf'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes,
        x_count: 2
      },
      {
        type: 'active',
        name: 'Emerald Requiem',
        cost: 4,
        description: 'Restore [1d6] HP to all ally characters (inclusive), and summon a [1/3] «Emerald Tea Leaf» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 27,
    image: 'Wiiiyaa',
    handle: 'wiiiyaa_',
    artist: 'SketchSamurai',
    name: 'Wiiiyaa',
    rarity: 'common',
    maxHp: 10,
    tokenIds: ['tok-wiyaboo'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'The Redacted List',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [2/2] «Wiyaboo» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 28,
    image: 'Omelette',
    handle: 'omelettessss',
    artist: 'SketchSamurai',
    name: 'Omelette',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Jerkin\' My B@lls',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 29,
    image: 'Tirumisa',
    handle: 'misabunbun',
    artist: 'SketchSamurai',
    name: 'Tirumisa',
    rarity: 'common',
    maxHp: 12,
    tokenIds: ['tok-bunbun'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes
      },
      {
        type: 'active',
        name: 'Energy Drink Zoomies',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [0/4] «Bunbun» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 30,
    image: 'StrawberryMoonua',
    handle: 'StrawberryMoonua',
    artist: 'SketchSamurai',
    name: 'Strawberry Moonua',
    rarity: 'common',
    maxHp: 10,
    tokenIds: ['tok-strawbaby'],
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Bananafication',
        cost: 3,
        description: 'Deal [1d6] DMG to an enemy target, and summon a [2/2] «Strawbaby» to any lane.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 31,
    image: 'Meekmac',
    handle: 'meekmac_art',
    artist: 'SketchSamurai',
    name: 'Meekmac',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Collab
      },
      {
        type: 'active',
        name: 'Needs Sleep',
        cost: 3,
        description: 'Restore 2 HP to this character, and deal [1d6] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 32,
    image: 'ThaiLu',
    handle: 'thailuart',
    artist: 'SketchSamurai',
    name: 'Thai Lu',
    rarity: 'common',
    maxHp: 8,
    skills: [
      {
        type: 'passive',
        name: PassiveType.Lurker
      },
      {
        type: 'active',
        name: 'Over-Rendering',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 33,
    image: 'Yuniese',
    handle: 'yuniese',
    artist: 'SketchSamurai',
    name: 'Yuniese',
    rarity: 'common',
    maxHp: 13,
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes
      },
      {
        type: 'active',
        name: 'Yunismile',
        cost: 4,
        description: 'Restore [1d6+2] HP to all ally characters (inclusive).',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 34,
    image: 'Whalekun',
    handle: 'whalekun777',
    artist: 'SketchSamurai',
    name: 'Whalekun',
    rarity: 'uncommon',
    maxHp: 12,
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes,
        x_count: 2
      },
      {
        type: 'active',
        name: 'Gamba Time!!',
        cost: 6,
        description: 'Roll [1d20], and use the result for the following ally character DMG bonuses once during your next turn.\n' +
        '<10: -1 DMG, 11-14: +1 DMG, 15-19: +3 DMG, 20: +5 DMG.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 35,
    image: 'Mochiii',
    handle: 'mochiii_000_',
    artist: 'SketchSamurai',
    name: 'Mochiii',
    rarity: 'common',
    maxHp: 10,
    skills: [
      {
        type: 'passive',
        name: PassiveType.TimedOut
      },
      {
        type: 'active',
        name: 'Blobify',
        cost: 3,
        description: 'Deal [1d6+2] DMG to an enemy target.',
      },
    ],
  },
  {
    setId: 'AL00',
    number: 36,
    image: 'UlyssesElrin',
    handle: 'Ulysses_Elrin',
    artist: 'SketchSamurai',
    name: 'Ulysses Elrin',
    rarity: 'common',
    maxHp: 13,
    skills: [
      {
        type: 'passive',
        name: PassiveType.CozyVibes
      },
      {
        type: 'active',
        name: 'Goddess of Rebirth',
        cost: 5,
        description: 'Restore [1d6] HP to all ally characters (inclusive). If any ally summons were knocked out on your opponent\'s last turn, restore 1 additional HP to all ally characters (inclusive).',
      },
    ],
  },
  // Overnumbered secret prints.
  // No name, HP or skills here, those get resolved at read time
  {
    setId: 'AL00',
    number: 37,
    image: 'GenieFullArt',
    artist: 'SketchSamurai',
    rarity: 'rare',
    baseCardId: 'AL00-002',
    handle: 'genieart_'
  },
  {
    setId: 'AL00',
    number: 38,
    image: 'JeyFullArt',
    artist: 'SketchSamurai',
    rarity: 'rare',
    baseCardId: 'AL00-004',
    handle: 'jey_vt'
  },
  {
    setId: 'AL00',
    number: 39,
    image: 'FangFullArt',
    artist: 'SketchSamurai',
    rarity: 'rare',
    baseCardId: 'AL00-012',
    handle: 'FangGuu'
  },
  {
    setId: 'AL00',
    number: 40,
    image: 'NyxieFullArt',
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'AL00-009',
    handle: 'nyxiena'
  },
  {
    setId: 'AL00',
    number: 41,
    image: 'MakoSameshimaFullArt',
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'AL00-011',
    handle: 'MakoSameshima'
  },
  {
    setId: 'AL00',
    number: 42,
    image: 'HyuniFullArt',
    artist: 'SketchSamurai',
    rarity: 'ultra-rare',
    baseCardId: 'AL00-023',
    handle: 'hyunicat'
  }
]
