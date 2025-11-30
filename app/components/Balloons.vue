<template>
  <div class="balloon-container">
    <div v-for="n in 20" :key="n" class="balloon" />
  </div>
</template>

<script setup>
const balloons = Array.from({ length: 20 });
</script>

<style scoped>
.balloon-container {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.balloon {
  width: 18px;
  height: 24px;
  background: hotpink;
  border-radius: 50% 50% 45% 45%;
  position: absolute;
  bottom: -40px;
  left: calc(100% * var(--i));
  animation: fly 6s linear infinite;
  opacity: 0.8;
}

.balloon:nth-child(odd) {
  background: gold;
}
.balloon:nth-child(even) {
  background: skyblue;
}

@keyframes fly {
  0% {
    transform: translateY(0) scale(0.9);
  }
  100% {
    transform: translateY(-120vh) scale(1.3);
  }
}
</style>
