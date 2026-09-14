<script setup lang="ts">
import { skillDescription, passiveSkillColor, skillName, type Skill } from '@/types/card'

defineProps<{ skills: Skill[] }>()
</script>

<template>
  <ul class="list-unstyled d-grid gap-3 mb-0">
    <li v-for="skill in skills" :key="skill.name" class="vs-skill" :class="`vs-skill--${skill.type}`">
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <span v-if="skill.type === 'passive'" class="badge" :class="`text-bg-${passiveSkillColor(skill.name)}`">{{ skillName(skill) }}</span>
        <!-- `cost` only exists on active skills, so this narrowing is exhaustive. -->
        <span v-else class="d-flex align-items-center gap-2 flex-wrap">
          <div class="vs-cost" :title="`Costs ${skill.cost}`">
          {{ skill.cost }}
          </div>
          <strong>{{ skill.name }}</strong>
        </span>
      </div>
      <p class="mb-0 mt-1 text-body-secondary small preserve-newlines">{{ skillDescription(skill) }}</p>
    </li>
  </ul>
</template>
