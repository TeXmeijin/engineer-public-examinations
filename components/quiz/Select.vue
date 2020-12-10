<template>
  <div>
    hoge
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Select } from '../../types/quiz/Select'

export default defineComponent({
  props: {
    quiz: {
      type: Object as () => Select,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
