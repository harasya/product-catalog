<template>
    <div class="sidebar">
      <h1>TOKO APA SAJA</h1>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.sidebar {
  position: sticky;
  top: 0;
  width: 0;
  padding: 1rem;
  background-color: #dede;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  height: 100vh;
  @media (min-width: 500px) {
    width: 64px;
  }
  @media (min-width: 768px) {
    width: 250px;
  }

  h1 {
    font-size: large;
    text-align: center;
  }
}
</style>
