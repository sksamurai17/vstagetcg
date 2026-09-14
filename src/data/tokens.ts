import type { Token } from '@/types/card'

export const tokens: Token[] = [
  {
    id: 'tok-toeby',
    kind: 'summon',
    name: 'Toeby',
    maxHp: 2,
    dmgOutput: 2,
  },
  {
    id: 'tok-dust-bunny',
    kind: 'summon',
    name: 'Dust Bunny',
    maxHp: 3,
    dmgOutput: 1,
  },
  {
    id: 'tok-kidokafe',
    kind: 'stage-effect',
    name: 'KidoKafé',
    duration: 3,
    effectOutput: 'At the end of your turn, count your unused resource, and restore the amount as HP to the ally character with the lowest HP.',
  },
  {
    id: 'tok-fuspiritlake',
    kind: 'stage-effect',
    name: 'Fu\'s Spirit Lake',
    duration: 3,
    effectOutput: 'At the end of your turn, restore [1] HP to all ally characters.',
  },
  {
    id: 'tok-beach',
    kind: 'summon',
    name: 'Beach',
    maxHp: 3,
    dmgOutput: 1
  },
  {
    id: 'tok-bonehead-isle',
    kind: 'stage-effect',
    name: 'Bonehead Isle',
    duration: 3,
    effectOutput: 'While active, reduce incoming DMG to all allies by 1.'
  },
  {
    id: 'tok-norowool',
    kind: 'summon',
    name: 'Norowool',
    maxHp: 3,
    dmgOutput: 1
  },
  {
    id: 'tok-hyunite',
    kind: 'summon',
    name: 'Hyunite',
    maxHp: 3,
    dmgOutput: 1
  },
  {
    id: 'tok-all-rapid-all-center',
    kind: 'stage-effect',
    name: 'All Rapid All Center',
    duration: 3,
    effectOutput: 'The first active skill used during your attack phase may target an enemy in any lane.'
  },
  {
    id: 'tok-emerald-tea-leaf',
    kind: 'summon',
    name: 'Emerald Tea Leaf',
    maxHp: 3,
    dmgOutput: 1
  },
  {
    id: 'tok-wiyaboo',
    kind: 'summon',
    name: 'Wiyaboo',
    maxHp: 2,
    dmgOutput: 2
  },
  {
    id: 'tok-bunbun',
    kind: 'summon',
    name: 'Bunbun',
    maxHp: 4,
    dmgOutput: 0
  },
  {
    id: 'tok-strawbaby',
    kind: 'summon',
    name: 'Strawbaby',
    maxHp: 2,
    dmgOutput: 2
  }
]
