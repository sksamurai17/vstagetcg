import type { Token } from '@/types/card'

export const tokens: Token[] = [
  {
    id: 'tok-superchat',
    kind: 'summon',
    name: 'Superchat',
    maxHp: 2,
    dmgOutput: 0,
  },
  {
    id: 'tok-clipper',
    kind: 'summon',
    name: 'Clipper',
    maxHp: 1,
    dmgOutput: 0,
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
