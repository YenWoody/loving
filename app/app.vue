<template>
  <NuxtLayout>
    <div>
      <!-- Player -->
      <audio ref="bgm" loop preload="auto" src="/july.mp3" />

      <!-- Nút mute/unmute -->
      <button class="music-btn" @click="toggleMusic">
        {{ isPlaying ? "🔊" : "🔇" }}
      </button>

      <Transition name="fade-page" mode="out-in">
        <NuxtPage />
      </Transition>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

const bgm = ref(null);
const isPlaying = ref(false);

// Toggle bằng nút
const toggleMusic = async () => {
  if (!bgm.value) return;

  if (isPlaying.value) {
    bgm.value.pause();
    isPlaying.value = false;
  } else {
    await bgm.value.play().catch(() => {});
    isPlaying.value = true;
  }
};

onMounted(() => {
  // Giải pháp bypass autoplay:
  // Chỉ cần người dùng "click/touch" 1 lần bất kỳ thì audio sẽ play
  const unlock = async () => {
    if (!bgm.value) return;

    await bgm.value.play().catch(() => {});
    bgm.value.muted = false;
    isPlaying.value = true;

    // Bỏ listener sau khi đã autoplay thành công
    window.removeEventListener("click", unlock);
    window.removeEventListener("touchstart", unlock);
  };

  // Chrome/Safari allow unmute+play sau user interaction
  window.addEventListener("click", unlock);
  window.addEventListener("touchstart", unlock);

  // Bắt đầu silent trước (để tránh lỗi autoplay block)
  if (bgm.value) {
    bgm.value.muted = true;
    bgm.value.play().catch(() => {});
  }
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #ffe9f2;
  scroll-behavior: smooth;
}

/* Button góc phải */
.music-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  border: 2px solid #ff69b4;
  padding: 12px 14px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  z-index: 9999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
}

.music-btn:hover {
  transform: scale(1.12);
}

/* Page transitions */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>
