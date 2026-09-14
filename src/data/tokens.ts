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
]
