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

/** On-page contents. Each `id` matches a section heading anchor below. */
const contents = [
  { id: 'layout', label: 'Game layout' },
  { id: 'deck', label: 'Deck construction' },
  { id: 'setup', label: 'Setup' },
  { id: 'turn', label: 'Turn structure' },
  { id: 'resources', label: 'Resources' },
  { id: 'characters', label: 'Characters' },
  { id: 'skills', label: 'Character skills' },
  { id: 'tokens', label: 'Summons and stage effects' },
  { id: 'end', label: 'End of game' },
  { id: 'open', label: 'Still being decided' },
]
</script>

<template>
  <div class="container py-4" style="max-width: 48rem">
    <h1 class="h2">Rules</h1>
    <p class="lead text-body-secondary">
      A first pass at how VStage plays. The card list is further along than the ruleset — a few
      points are still open, and they are collected at the bottom rather than papered over.
    </p>

    <nav aria-label="On this page" class="my-4">
      <ul class="list-inline small mb-0">
        <li v-for="item in contents" :key="item.id" class="list-inline-item me-3">
          <a :href="`#${item.id}`">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <section class="mb-5">
      <h2 id="layout" class="h4">Game layout</h2>
      <p>Each player's side of the table holds:</p>
      <ul>
        <li>Three active characters</li>
        <li>A summon token area</li>
        <li>A stage effect token area</li>
        <li>Their deck</li>
        <li>Their discard pile</li>
      </ul>
      <p>Keep dice and coins on hand too — some skills use them to determine their output.</p>
    </section>

    <section class="mb-5">
      <h2 id="deck" class="h4">Deck construction</h2>
      <ul>
        <li>A deck is 20 characters.</li>
        <li>Only 2 copies of each character in the same set may exist in a deck.</li>
        <li>Token cards for summons and stage effects are kept separately, outside the deck.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="setup" class="h4">Setup</h2>
      <ol>
        <li>Both players shuffle their decks separately.</li>
        <li>Determine who goes first by a game of chance — for example, highest roll on 1d6.</li>
        <li>
          Each player draws 6 cards and chooses any number of them to keep. Put the rest on the
          bottom of your deck, draw that many from the top, then shuffle.
        </li>
        <li>Place 3 cards from your hand onto your stage.</li>
        <li>Player 1 places 1 resource into their resource zone; player 2 places 2.</li>
        <li>Play begins.</li>
      </ol>
    </section>

    <section class="mb-5">
      <h2 id="turn" class="h4">Turn structure</h2>
      <ol>
        <li>Gain 2 resource.</li>
        <li>Declare and use passive skills, if any of your characters have them.</li>
        <li>Untap all used resource.</li>
        <li>
          Attack. Resource must be tapped to attack, and a character can only attack once per
          turn. If a character has two active skills, only one of them may be used.
        </li>
        <li>At the end of the turn, resolve any summon or stage effect end-of-turn attacks.</li>
        <li>Pass the turn.</li>
      </ol>
    </section>

    <section class="mb-5">
      <h2 id="resources" class="h4">Resources</h2>
      <ul>
        <li>You gain 2 resource into your resource zone at the start of each of your turns.</li>
        <li>Resource is what pays for attacks, and is tapped to do so.</li>
        <li>All resource refreshes to untapped at the start of your turn.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="characters" class="h4">Characters</h2>
      <ul>
        <li>A character cannot attack on the turn it is played.</li>
        <li>A defeated character goes to its owner's backstage — the discard pile.</li>
        <li>
          At the start of your next turn you may add a character from your hand to the stage as
          a replacement. It enters inactive, and you draw a card.
        </li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="skills" class="h4">Character skills</h2>
      <p>
        A skill triggers at the moment stated on the card. The colour of a character's first
        skill says when that is:
      </p>
      <ul>
        <li><strong>Yellow</strong> — a passive. Declared and used at the start of your turn.</li>
        <li>
          <strong>Green</strong> — a reaction. Triggers when the character takes damage from an
          enemy.
        </li>
      </ul>
      <p>Two keywords appear in skill text:</p>
      <ul>
        <li><strong>Summon</strong> creates a summon token.</li>
        <li><strong>Deploy</strong> creates a stage effect token.</li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 id="tokens" class="h4">Summons and stage effects</h2>

      <h3 class="h6 text-uppercase text-body-secondary mt-4">Summons</h3>
      <ul>
        <li>A summon is written in <strong>[Power/Toughness]</strong> notation.</li>
        <li>Each summon states how many copies of it can be on the stage at once.</li>
        <li>
          At the end of each turn, a summon that has not been defeated has its damage counter
          reset.
        </li>
      </ul>

      <h3 class="h6 text-uppercase text-body-secondary mt-4">Stage effects</h3>
      <ul>
        <li>A stage effect is written in <strong>[Effect Type]</strong> notation.</li>
        <li>It stays in effect for the number of turns it specifies.</li>
        <li>Only 1 stage effect can be in effect at a time.</li>
        <li>
          Deploying one while another is already in effect is a choice: swap to the new one,
          which resets the turn count, or keep the existing one.
        </li>
      </ul>

      <div class="table-responsive mt-3">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Notation</th>
              <th scope="col">Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="fw-normal"><code>[+2]</code></th>
              <td>
                Restores the specified amount of HP to an ally character at the end of your
                turn.
              </td>
            </tr>
            <tr>
              <th scope="row" class="fw-normal"><code>[-1]</code></th>
              <td>
                Reduces incoming damage to one ally character by the specified amount during
                your opponent's next turn.
              </td>
            </tr>
            <tr>
              <th scope="row" class="fw-normal"><code>[1]</code></th>
              <td>
                Deals the specified amount of damage to an enemy character at the end of your
                turn.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-5">
      <h2 id="end" class="h4">End of game</h2>
      <p>The game ends when one player has defeated 6 of their opponent's characters.</p>
    </section>

    <section class="mb-5">
      <h2 id="open" class="h4">Still being decided</h2>
      <p class="text-body-secondary">
        Written down rather than guessed at. Cards and artwork come first; these get settled
        after.
      </p>
      <ul class="text-body-secondary">
        <li>
          Whether a turn has a draw step. As written, the only draw is the one that comes with
          replacing a defeated character.
        </li>
        <li>
          Where attack damage comes from. Characters have HP but no printed power, so it is not
          yet stated whether attacking is its own action or simply the use of an active skill.
        </li>
        <li>
          What happens to a summon defeated during your opponent's turn. Recycling it is the
          current guess.
        </li>
        <li>
          Whether the 2-copy deck limit counts characters or printings, and so whether an
          overnumbered reprint shares its base card's limit.
        </li>
      </ul>
    </section>
  </div>
</template>
