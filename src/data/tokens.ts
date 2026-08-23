import type { Token } from '@/types/card'

export const tokens: Token[] = [
  {
    id: 'tok-superchat',
    kind: 'creature',
    name: 'Superchat',
    maxHp: 2,
    effect: {
      name: 'Tip Jar',
      description: 'While Superchat is on the field, its owner draws one extra card each upkeep.',
    },
  },
  {
    id: 'tok-clipper',
    kind: 'creature',
    name: 'Clipper',
    maxHp: 1,
    effect: {
      name: 'Out of Context',
      description: 'When Clipper is destroyed, copy the last skill used by any character.',
    },
  },
  {
    id: 'tok-stage-lights',
    kind: 'field',
    name: 'Stage Lights',
    duration: 3,
    effect: {
      name: 'Spotlight',
      description: 'All characters you control gain +1 max HP while Stage Lights is active.',
    },
  },
  {
    id: 'tok-raid',
    kind: 'field',
    name: 'Incoming Raid',
    duration: 2,
    effect: {
      name: 'Surge',
      description: 'Active skills cost 1 less while Incoming Raid is active.',
    },
  },
]
