<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup lang="ts">
const props =  defineProps({
  currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
})
const emit = defineEmits<{
  (e: 'page-change', value: number):void
}>()

const previousPage = () => {
  emit('page-change', props.currentPage - 1);
}

const nextPage = () => {
  emit('page-change', props.currentPage + 1);
}
</script>

<style lang="postcss" scoped>
.pagination {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
}
</style>
