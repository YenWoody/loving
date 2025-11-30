<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffd7e6, #fff6fa);
  overflow-x: hidden;
  color: #333;
  font-family: "Poppins", sans-serif;
}

/* Transition smooth cho page */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
