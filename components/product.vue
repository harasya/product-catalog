<template>
  <div class="item">
    <div class="item__image">
      <img :src="image" :alt="item.title" width="200"  />
    </div>
    <div class="item__title">
      <span>{{ item.title }}</span>
      <Rating v-model:rate="item.rating"/>
    </div>
    <div class="item__price">
      <span>${{ item.price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})


const image = computed(() => props.item.images[0])
</script>

<style lang="postcss" scoped>
.item {
  padding: 1rem;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    background-color: #eee;
  }
  .item__image {
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    img {
      max-height: 100%;
    }
  }
  .item__title {
    padding: 1rem 0;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .item__price {
    font-size: large;
    font-weight: bold;
  }
}
</style>
