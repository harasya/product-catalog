<template>
  <div>
    <div class="navigate-back">
      <NuxtLink to="/">
        << Back
      </NuxtLink>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.navigate-back {
  padding: 1rem;
  box-shadow: 1rem 0.1rem 1rem #eee;
  a {
    color: #000;
    text-decoration: none;
  }
}
</style>
