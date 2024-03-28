<template>
   <div class="rating">
    <span v-for="star in totalStars" :key="star" @click="rate(star)" :class="{ 'filled': star <= (currentRating as number) }">
      {{ star <= (currentRating as number) ? '&#9733;' : (star - 1 < (currentRating as number) ? '&#9733;' : '&star;') }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  maxRating: {
    type: Number,
    default: 5
  },
})

const currentRating = defineModel<Number>('rate', { default: 0, required: true })
const totalStars = computed(() => Array(props.maxRating).fill().map((_, index) => index + 1))

const rate = (rating: number) =>{
  currentRating.value = rating;
}
</script>

<style lang="postcss" scoped>
.rating {
  color: #FFD700;
  cursor: pointer;
}

.filled {
  color: #FFD700;
}
</style>
