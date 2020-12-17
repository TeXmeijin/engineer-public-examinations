<template>
  <div>
    <div class="question">
      <span class="question__heading">質問</span>
      <p class="question__text">
        {{ quiz.question }}
      </p>
    </div>
    <ul class="items">
      <li v-for="item in quiz.items" :key="item.text" class="item" @click="judgeCorrect(item)">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Select, SelectItem } from '../../types/quiz/Select'

export default defineComponent({
  props: {
    quiz: {
      type: Object as () => Select,
      required: true
    }
  },
  setup () {
    const judgeCorrect = (item: SelectItem) => {
      console.log(item.isCorrect)
    }
    return {
      judgeCorrect
    }
  }
})
</script>

<style scoped>

</style>
