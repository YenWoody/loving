<template>
  <NuxtLayout>
    <Transition name="fade-page" mode="out-in">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
</template>

<script setup>
// Nếu sau muốn thêm global state, theme, music player => đặt ở đây
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #ffe9f2; /* fallback nếu layout load chậm */
  scroll-behavior: smooth;
}

/* Page transition effect */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>
