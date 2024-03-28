<template>
 <div class="placeholder-item">
  <div class="placeholder-content"></div>
</div>
</template>


<style lang="postcss" scoped>
.placeholder-item {
  margin-bottom: 10px;
}

.placeholder-content {
  height: 400px;
  width: 220px;
  background-color: #f0f0f0;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
</style>
