<template>
  <div class="container">
    <Sidebar/>
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.container {
  display: block;
  gap: 1rem;
  @media (min-width: 500px) {
    display: flex;
  }
}
</style>
