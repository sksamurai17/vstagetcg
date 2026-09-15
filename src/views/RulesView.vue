<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Rules — VStage',
  meta: [
    {
      name: 'description',
      content:
        'How to play VStage: deck construction, setup, turn structure, resources, ' +
        'characters, skills, summons and stage effects.',
    },
  ],
})

const contents = [
  { id: 'layout', label: 'Field Layout' },
  { id: 'deck', label: 'Deck Construction' },
  { id: 'setup', label: 'Game Setup' },
  { id: 'turn', label: 'Turn Structure' },
  { id: 'resources', label: 'Resources' },
  { id: 'characters', label: 'Characters' },
  { id: 'skills', label: 'Character Skills' },
  { id: 'tokens', label: 'Summons and Stage Effects' },
  { id: 'end', label: 'End of Game' },
]
</script>

<template>
  <div class="container py-4" style="max-width: 48rem">
    <h1 class="h2">Gameplay Rules</h1>

    <nav aria-label="On this page" class="my-4">
      <ul class="list-inline small mb-0">
        <li v-for="item in contents" :key="item.id" class="list-inline-item me-3">
          <a :href="`#${item.id}`">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <section class="mb-5">
      <h2 id="layout" class="h4">Field Layout</h2>
      <p>Each player's side of the stage holds the following:</p>
      <ul>
        <li> Three positions, with each consisting of a character and potentially a summon</li>
        <li> A stage effect token area</li>
        <li> The player's deck of character cards</li>
        <li> The player's pool of infinite resource ("Hype")</li>
        <li> Their hand of character cards (not visible to the other player)</li>
        <li> A discard pile area</li>
      </ul>
      <p>Keep standard 6-sided dice and a few coins on hand too, as most skills use them to determine raw damage output.</p>
    </section>

    <section class="mb-5">
      <h2 id="deck" class="h4">Deck Construction</h2>
      <p>A character card deck consists of 30 characters. Only 2 copies of each character (from the same set, including overnumbered secret rares) may exist in a deck.</p>
      <p>Tokens for summons and stage effects are kept separately, so that users are able to place them on the field as soon as they obtain the respective host character and enough resource to pay the skill cost.</p>
    </section>

    <section class="mb-5">
      <h2 id="setup" class="h4">Game Setup</h2>
      <ol>
        <li>Both players shuffle their decks separately.</li>
        <li>Determine who goes first by a game of chance. For example, highest roll on 1d6.</li>
        <li>
          Each player draws 6 cards and chooses any number of them to keep. Place the rest of the cards at the
          bottom of your deck, draw that many more cards from the top, and then shuffle the deck.
        </li>
        <li>Each player draws 5 resource to start.</li>
        <li>Place 3 cards from your hand onto your stage.</li> 
        <li>Play begins.</li>
      </ol>
    </section>

    <section class="mb-5">
      <h2 id="turn" class="h4">Turn Structure</h2>
      <ol>
        <li>At the start of each subsequent turn (i.e. not including your first turn), players gain 3 resource ("Hype").</li>
        <li>Untap all characters and summons.</li>
        <li>Draw a card from your character deck. If you have more than the maximum of 6 cards in your hand, you must choose to discard until you have 6 cards.</li>
        <li>If any characters have passive skills that activate during your pre-combat phase, you may use them now.</li>
        <li>If a character was defeated on your opponent's last turn and you have an empty lane, you can play a card from your hand to the stage in tapped position.</li>
        <li>If a character was marked as unable to take action during your opponent's last turn, mark them as tapped.</li>
        <li>
          Combat phase. Resource must be spent to use active skills, and each character can only use one active skill per
          turn, as long as you have the resource to do so. If a character has a boost effect, you may pay the additional cost to use both the boost effect and the base effect of a skill.
        </li>
        <li> Characters may also only use skills on enemy targets in their respective lanes unless specified by a skill description, passive skill, or stage effect. Characters cannot attack an enemy target shielded behind a summon, also unless specified by a skill description, passive skill, or stage effect.</li>
        <li>At the end of the turn, resolve any summon or stage effect end-of-turn attacks from stage left to stage right. If an enemy lane is empty at the time one of your summons can attack, (and your summon has a nonzero attack value), you may draw 1 additional resource.</li>
        <li>All spent resource during your turn is recycled back into your infinite resource pool.</li>
        <li>Pass the turn.</li>
      </ol>
    </section>

    <section class="mb-5">
      <h2 id="resources" class="h4">Resources</h2>
      <p>Resource in this game is referred to as "Hype" in card descriptions.</p>
      <ul>
        <li>At the start of each turn, you gain 3 resource into your resource zone.</li>
        <li>Resource is what pays for attacks, and is tapped to do so.</li>
        <li>All resource refreshes to untapped at the start of your turn.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="characters" class="h4">Characters</h2>
      <ul>
        <li>A character cannot use skills on the turn they are played, unless a passive skill indicates that they enter the stage ready.</li>
        <li>A character defeated during your opponent's goes to your discard pile, or "Backstage". At the start of your next turn, you may place a character from your hand to the stage as
          a replacement. It enters inactive (unless specified by the rules mentioned above), and you must draw a card to replace your hand.
        </li>
        <li>Characters on the field cannot retreat back into your hand, and must be defeated in order to leave the stage. Damage incurred is persistent across turns, but can be restored through HP restoration skills.</li>
        <li>Once a character activates and resolves an active skill, turn the card 90 degrees clockwise to mark it as tapped. Tapped characters can still use passive reaction abilities during your opponent's turn.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="skills" class="h4">Character Skills</h2>
      <p>
        A skill triggers at the moment stated on the card. There are currently 4 different categories of passive skills:
      </p>
      <ul>
        <li><strong>Lurker</strong> Once during your opponent's turn, when this character is targeted by an enemy, you may spend 3 Hype to evade the attack. This passive can only be used once per Lurker character per opponent's turn.</li>
        <li>
          <strong>Collab X</strong> — When attacking an enemy target, deal X (value determined by the specific passive skill tag) additional DMG to adjacent enemies. If the enemy target is on an outer lane, only the center lane enemy will also be affected by this attack.
        </li>
        <li>
          <strong>Cozy Vibes X</strong>At the start of your turn, restore X HP (value determined by the specific passive skill tag)  to adjacent ally characters. Similar to Collab X, if the summon with this ability is in an outer lane, then they can only restore HP to one of two additional lanes.
        </li>
        <li>
          <strong>Timed Out</strong> - When this character attacks an enemy target, that target cannot take action on your opponent's turn. This is similar to the tapped state, where you cannot spend resource to take action, except for passive skills.
        </li>
      </ul>
      <p>Two keywords appear in skill text:</p>
      <ul>
        <li><strong>Summon</strong> creates a summon token.</li>
        <li><strong>Deploy</strong> creates a stage effect token.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="tokens" class="h4">Summons and Stage Effects</h2>
      <h3 class="h6 text-uppercase text-body-secondary mt-4">Summons</h3>
      <ul>
        <li>Summons use <strong>[Power/Toughness]</strong> notation, and have persistent damage across turns until defeated. A summon is written in <strong>[Power/Toughness]</strong> notation.</li>
        <li>Summons attacks do not require resource to activate, and automatically attack after your combat phase.</li>
        <li>A maximum of 3 summons can exist on the field at once (per player), with 1 summon per lane. When spawned, summons enter the field tapped and cannot take action until your next turn.</li>
        <li>If a summon is defeated on your opponent's turn, it is recycled into your summon card deck so it can be resummoned again in the future.</li>
      </ul>

      <h3 class="h6 text-uppercase text-body-secondary mt-4">Stage Effects</h3>
      <ul>
        <li>Only 1 stage effect per player can be in effect at the same time.</li>
        <li>Stage effects only exist for 3 turns (beginning the first turn after they are deployed), and their effect is included on the deploying character's skill description.</li>
        <li>Stage effects have no HP gauge, and cannot be attacked or overwritten by your opponent.</li>
        <li>When activating a character's boosted skill to deploy a stage effect and another stage effect is already in use, you may either swap out the current stage effect and reset its turn counter.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="end" class="h4">End of game</h2>
      <p>The game ends when one player has defeated 4 of their opponent's characters.</p>
    </section>
  </div>
</template>
