import type { Token } from '@/types/card'

export const tokens: Token[] = [
  {
    id: 'tok-fuspiritlake',
    kind: 'stage-effect',
    name: 'Fu\'s Spirit Lake',
    duration: 3,
    effectOutput: '+1',
  },
  {
    id: 'tok-toeby',
    kind: 'summon',
    name: 'Toeby',
    maxHp: 2,
    dmgOutput: 1,
  },
  {
    id: 'tok-kidokafe',
    kind: 'stage-effect',
    name: 'KidoKafé',
    duration: 3,
    effectOutput: '+1',
  },
]
